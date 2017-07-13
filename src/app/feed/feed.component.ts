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
    likedPosts: [],
    skippedPosts: [],
    isGettingPosts: false,
    isCheckingLikes: false
  }

  p: number = 1;
  readonly TIMEOUT_STEP = 400;
  groupOffset = 0;
  groupsAvailable = 0;
  currentUser = <any>{};
  currentUserGroups = [];
  radio = 'user_groups' // 'other_groups'
  posts = [];
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
      this.currentUser = <any>{};
      this.currentUserGroups = [];
    }
    this.state.skippedPosts = []
    this.radio = 'user_groups';
    this.state.likedPosts = [];
    this.groupOffset = 0;
    this.groupsAvailable = 0;
    this.timer = 0;
    this.counter = 0;
    this.selectedTab = 0;
  }
  getAllWallPosts({owner_id, user_id, user_access_token, count}) {
    this.state.isGettingPosts = true;

    const httpRequest = (offset) => {
      return this.appService.getWallPosts({
              owner_id: owner_id,
              count: ((count - offset) < 100) ? (count - offset) : 100,
              user_access_token: user_access_token,
              offset: offset })
                  .then((response: any) => {
                    return response.posts;
                  })
      }

    return new Promise((resolve, reject) => {
      this.appService.apiQuery(count, (results: any) => {
        this.state.isGettingPosts = false;
        resolve(results);
      }, httpRequest);
    });
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
                    this.state.likedPosts.push(this.appService.formatPost(post, response));
                  }
                } else {
                  this.state.skippedPosts.push(post);
                  console.log('problems with getting response, skipped')
                }

                if (this.counter === posts.length) {
                  this.state.isCheckingLikes = false;

                  if (!this.state.likedPosts.length) {
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
    this.getAllWallPosts({ owner_id, user_id, user_access_token, count })
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
      this.getUserAndUserGroups({user_id: data.user_id, user_access_token: this.authService.cookies.access_token});
    } else {
      this.snackBar.open('Неправильный ID пользователя', 'ОК');
    }
  }

  submitWallForm(event: Event, data: any) {
    this.setDefault(event);
    this.getLikedPosts({
      owner_id: data.form.value.group_id,
      user_id: this.currentUser.uid,
      count: data.form.value.posts_count,
      user_access_token: this.authService.cookies.access_token});
  }

  getUserAndUserGroups({user_id, user_access_token}) {
    this.appService
      .getUserData({user_id: user_id, user_access_token: user_access_token})
        .then((response) => {
          if (!response) {
            this.showError();
          } else {
            this.currentUser = response[0];
            if ('deactivated' in this.currentUser) {
              this.snackBar.open(`Профиль имеет статус: ${this.currentUser.deactivated}`, 'OK')
            } else {
              this.appService
                .getUserGroups({user_id: this.currentUser.uid,
                                user_access_token: this.authService.cookies.access_token,
                                count: 100})
                  .then((groups_response: any) => {
                    let groupList = [];
                    if (Boolean(groups_response)) {
                      this.groupsAvailable = groups_response.available;
                      groupList = groups_response.groups.filter((group) => {
                        if (!group.deactivated) {
                          return group;
                        }
                      });
                      if (groupList.length) {
                        this.currentUserGroups = groupList;
                      } else {
                        this.radio = 'other_groups';
                        this.currentUserGroups = [];
                      }
                    } else {
                      this.radio = 'other_groups';
                      this.currentUserGroups = [];
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
    this.groupOffset += 100;
    this.appService
      .getUserGroups({user_id: this.currentUser.uid,
                      user_access_token: this.authService.cookies.access_token,
                      count: 100, offset: this.groupOffset})
      .then((response: any) => {
        if (response) {
          const groupList = response.groups.filter((group) => {
            if (!group.deactivated) {
              this.currentUserGroups.push(group);
            }
          });
        }
      })
  }

  ngOnInit() {
    this.authService.update();
  }
}
