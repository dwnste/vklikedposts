import { Component, OnInit, ViewChild } from '@angular/core';
import { MdDialog, MdDialogRef, MdSnackBar, MdProgressBarModule } from '@angular/material';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppService } from '../app.service';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  state = {
    isCheckingLikes: false,
    user: <any> {},
    groups: <any>{
      offset: 0,
      available: 0,
      current: []
    },
    posts: <any>{
      liked: [],
      skipped: []
    },
    page: <any>{
      radio: 'user_groups', // 'user_groups' == from the list, 'other_groups' == show input text field
      tab: <number>1, // current selected tab
      counter: <number>0, // how much posts has been filtered by filterLikedPosts()
      timer: <number>0, // timeleft before filterLikedPosts() will be finished (approximate, in miliseconds)
      p: <number>1, // current page of 'Посты' tab's pagination
    }
  }

  readonly TIMEOUT_STEP = 400;
  readonly MAX_ALLOWED = 100;

  constructor(private appService: AppService,
    public authService: AuthService,
    public snackBar: MdSnackBar) {}

    setDefault(event?: Event, removeUserData?: boolean) {
      if (event) {
        event.preventDefault();
      }
      if (removeUserData) {
        this.state.user = <any>{};
        this.state.groups.current = [];
      }
      this.state.posts.skipped = [];
      this.state.posts.liked = [];
      this.state.groups.offset = 0;
      this.state.groups.available = 0;
      this.state.page.timer = 0;
      this.state.page.counter = 0;
      this.state.page.tab = 0;
    }

    showOriginal(post) {
      if (post.post_type === 'post') {
        window.open(`https://vk.com/wall${post.to_id}_${post.id}`, '_blank');
      }
    }

    showError(error?: string, error_description?: string) {
      if (error && error_description) {
        this.snackBar.open(
          `${error.replace('+', ' ')}: ${error_description.replace('+', ' ')}`,
          'ОК'
        );
      } else {
        this.snackBar.open('Что-то пошло не так', 'ОК');
      }
    }

    showTimer = (timer, counter, TIMEOUT_STEP) => {
      return ((timer - counter * TIMEOUT_STEP) / 1000) + ' сек'; // TODO: format this time
    }

    backToUserForm(event: Event) {
      this.setDefault(event, true);
    }

    getUserAndUserGroups({user_id, user_access_token}) {
      this.appService
      .getUserData({user_id: user_id, user_access_token: user_access_token})
      .then((response) => {
        if (!response) {
          this.showError('Не удалось получить информацию о пользователе', 'истёк срок действия авторизации');
        } else if ('error' in response && 'error_description' in response) {
          this.showError(response.error, response.error_description);
        } else {
          this.state.user = response[0];
          if ('deactivated' in this.state.user) {
            this.showError('Не удалось получить данные о пользователе', `профиль имеет статус: ${this.state.user.deactivated}`)
          } else {
            this.appService
            .getUserGroups({user_id: this.state.user.uid,
              user_access_token: this.authService.cookies.access_token,
              count: this.MAX_ALLOWED})
              .then((groups_response: any) => {
                if (Boolean(groups_response)) {
                  this.state.groups.available = groups_response.available;
                  this.state.groups.current = groups_response.groups.filter((group) => {
                    if (!group.deactivated) {
                      return group;
                    }
                  });
                  if (!this.state.groups.current.length || !Boolean(groups_response)) {
                    this.state.page.radio = 'other_groups';
                    this.state.groups.current = [];
                  }
                }
              });
            }
          }
        });
      }

    getMoreGroups() {
      this.state.groups.offset += this.MAX_ALLOWED;
      this.appService
        .getUserGroups({user_id: this.state.user.uid,
                        user_access_token: this.authService.cookies.access_token,
                        count: this.MAX_ALLOWED, offset: this.state.groups.offset})
        .then((response: any) => {
          if (response) {
            const groupList = response.groups.filter((group) => {
              if (!group.deactivated) {
                this.state.groups.current.push(group);
              }
            });
          }
        });
    }

    filterLikedPosts({owner_id, user_id, user_access_token, posts}) {
      this.state.isCheckingLikes = true;
      if (posts) {
        let timeleft = 0;
        posts.map((post) => {
          timeleft += this.TIMEOUT_STEP;
          setTimeout(() => {
            this.appService
            .isLiked({
              user_id: user_id,
              type: 'post',
              owner_id: owner_id,
              item_id: post.id,
              user_access_token: user_access_token
            })
            .then((response: any) => {
              this.state.page.counter += 1;
              if (response && 'liked' in response) {
                if (Boolean(response.liked)) {
                  this.state.posts.liked.push(this.appService.formatPost(post, response));
                }
              } else {
                this.state.posts.skipped.push(post);
                console.log('problems with getting response, skipped')
              }

              if (this.state.page.counter === posts.length) {
                this.state.isCheckingLikes = false;

                if (!this.state.posts.liked.length) {
                  this.showError('Результат', 'не найдено ни одного поста с лайком');
                }
              }
            });
        }, timeleft);
      });
      this.state.page.timer = timeleft;
      } else {
        this.showError('Ошибка', 'не получилось запросить посты');
      }
  }

  getLikedPosts({owner_id, user_id, user_access_token, count}) {
    this.appService.getAllWallPosts({ owner_id, user_id, user_access_token, count })
      .then((posts: any) => {
        this.filterLikedPosts({ owner_id, user_id, user_access_token, posts })
      });
  }

  submitUserForm(event: Event, data: any) {
    event.preventDefault();
    if (data.user_id >= 0) {
      this.getUserAndUserGroups({
        user_id: data.user_id,
        user_access_token: this.authService.cookies.access_token
      });
    } else {
      this.showError('Неправильный ID', 'ID пользователя может состоять только из цифр от 0 до 9!')
    }
  }

  submitWallForm(event: Event, data: any) {
    this.setDefault(event);
    this.getLikedPosts({
      owner_id: data.form.value.group_id,
      user_id: this.state.user.uid,
      count: data.form.value.posts_count,
      user_access_token: this.authService.cookies.access_token
    });
  }

  ngOnInit() {
    this.authService.update();
  }
}
