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
    }
  }

  p = <number>1;
  readonly TIMEOUT_STEP = 400;

  radio = 'user_groups' // 'other_groups'
  timer = 0;
  counter = 0;
  selectedTab = 1;

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
    this.radio = 'user_groups';
    this.state.posts.liked = [];
    this.state.groups.offset = 0;
    this.state.groups.available = 0;
    this.timer = 0;
    this.counter = 0;
    this.selectedTab = 0;
  }

  filterLikedPosts({owner_id, user_id, user_access_token, posts}) {
    this.state.isCheckingLikes = true;
      if (posts) {
        let timeOut = 0;
        posts.map((post) => {
          timeOut += this.TIMEOUT_STEP;
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

                this.counter += 1;
                if (response && 'liked' in response) {
                  if (Boolean(response.liked)) {
                    this.state.posts.liked.push(this.appService.formatPost(post, response));
                  }
                } else {
                  this.state.posts.skipped.push(post);
                  console.log('problems with getting response, skipped')
                }

                if (this.counter === posts.length) {
                  this.state.isCheckingLikes = false;

                  if (!this.state.posts.liked.length) {
                    this.snackBar.open('Ни одного поста с лайком', 'ОК');
                  }
                }
              });
          }, timeOut);
        });
      this.timer = timeOut;
      } else {
        this.snackBar.open('Не получилось запросить посты', 'ОК')
      }
  }

  getLikedPosts({owner_id, user_id, user_access_token, count}) {
    this.appService.getAllWallPosts({ owner_id, user_id, user_access_token, count })
      .then((posts: any) => {
        this.filterLikedPosts({ owner_id, user_id, user_access_token, posts })
      })
  }

  showOriginal(post) {
    if (post.post_type === 'post') {
      document.location.href = `https://vk.com/wall${post.to_id}_${post.id}`
    }
  }

  showError(error?, error_description?) {
    this.snackBar.open('Что-то пошло не так', 'ОК');
    console.log('No response, sorry');
  }

  showTimer = (timer, counter, TIMEOUT_STEP) => {
    const timeBase = (timer - counter * TIMEOUT_STEP) / 1000;
    return timeBase + 'СЕК';

  }

  submitUserForm(event: Event, data: any) {
    event.preventDefault();
    if (data.user_id >= 0) {
      this.getUserAndUserGroups({
        user_id: data.user_id,
        user_access_token: this.authService.cookies.access_token
      });
    } else {
      this.snackBar.open('Неправильный ID пользователя', 'ОК');
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

  getUserAndUserGroups({user_id, user_access_token}) {
    this.appService
      .getUserData({user_id: user_id, user_access_token: user_access_token})
        .then((response) => {
          if (!response) {
            this.showError();
          } else {
            this.state.user = response[0];
            if ('deactivated' in this.state.user) {
              this.snackBar.open(`Профиль имеет статус: ${this.state.user.deactivated}`, 'OK')
            } else {
              this.appService
                .getUserGroups({user_id: this.state.user.uid,
                                user_access_token: this.authService.cookies.access_token,
                                count: 100})
                  .then((groups_response: any) => {
                    let groupList = [];
                    if (Boolean(groups_response)) {
                      this.state.groups.available = groups_response.available;
                      groupList = groups_response.groups.filter((group) => {
                        if (!group.deactivated) {
                          return group;
                        }
                      });
                      if (groupList.length) {
                        this.state.groups.current = groupList;
                      } else {
                        this.radio = 'other_groups';
                        this.state.groups.current = [];
                      }
                    } else {
                      this.radio = 'other_groups';
                      this.state.groups.current = [];
                    }
                  })
            }
          }
        });
  }

  backToUserForm(event: Event) {
    this.setDefault(event, true);
  }

  getMoreGroups() {
    this.state.groups.offset += 100;
    this.appService
      .getUserGroups({user_id: this.state.user.uid,
                      user_access_token: this.authService.cookies.access_token,
                      count: 100, offset: this.state.groups.offset})
      .then((response: any) => {
        if (response) {
          const groupList = response.groups.filter((group) => {
            if (!group.deactivated) {
              this.state.groups.current.push(group);
            }
          });
        }
      })
  }

  ngOnInit() {
    this.authService.update();
  }
}
