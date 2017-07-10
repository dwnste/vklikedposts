import { Component, OnInit, ViewChild } from '@angular/core';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { Cookie } from 'ng2-cookies/ng2-cookies';

import { AppService } from '../app.service';
import { AuthService } from '../auth/auth.service';

import { async } from 'async';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  readonly TIMEOUT_STEP = 400;
  postsAvailable = 0;
  groupOffset = 0;
  groupsAvailable = 0;
  currentUser = <any>{};
  currentUserGroups = [];
  searchingIsRunning = false;
  radio = 'user_groups' // 'other_groups'
  posts = [];
  timer = 0;
  counter = 0;
  selectedTab = 1;
  constructor(private appService: AppService,
              public authService: AuthService,
              public snackBar: MdSnackBar) {}

  getWallPosts({owner_id, count, user_access_token, posts = [], offset = 0, pause = 0}) {
    return this.appService.getWallPosts({
            owner_id: owner_id,
            count: count,
            user_access_token: user_access_token,
            offset: offset })
              .then((response: any) => {
                console.log(response.posts)
                if (response) {
                  if (count >= response.available) {
                    count = response.available;
                  }
                  if (count > 100) {
                    offset += 100;
                    count -= 100;
                  } else {
                    offset += count;
                    count -= count;
                  }
                  this.postsAvailable = response.available;
                  posts = posts.concat(response.posts);
                  console.log(offset, count, this.postsAvailable)
                  if (count > 0 && this.postsAvailable >= offset) {
                    pause += 400;
                    return this.getWallPosts({owner_id, count, user_access_token, posts, offset, pause});
                  } else {
                    return posts;
                  }
                } else {
                  this.showError();
                }
              })
              .catch((e) => { console.log(e) });
  }

  getAndFilterPosts({owner_id, user_id, count, user_access_token}) {
    if (this.authService.loggedIn()) {
      this.searchingIsRunning = true;
      this.getWallPosts({
        owner_id: owner_id,
        count: count,
        user_access_token: user_access_token })
          .catch((e) => { console.log(e) })
          .then((posts) => {
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
                    .then((isliked_response: any) => {

                      this.counter += 1;

                      if (isliked_response && 'liked' in isliked_response) {
                        if (Boolean(isliked_response.liked)) {
                          this.posts.push(this.appService.formatPost(post, isliked_response));
                        }
                      } else {
                        console.log('problems with getting response, skipped')
                      }

                      if (this.counter === posts.length) {
                        this.searchingIsRunning = false;

                        if (!this.posts.length) {
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
          });
      }
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
    this.groupOffset = 0;
    this.groupsAvailable = 0;
    this.posts = [];
    this.timer = 0;
    this.counter = 0;
    event.preventDefault();
    this.selectedTab = 0;
    this.getAndFilterPosts({
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
                    this.groupsAvailable = groups_response.available;
                    const groupList = groups_response.groups.filter((group) => {
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
                  })
            }
          }
        });
  }

  backToUserForm(event: Event) {
    event.preventDefault();
    this.radio = 'user_groups';
    this.posts = [];
    this.currentUser = {uid: null};
    this.currentUserGroups = [];
  }

  getMoreGroups() {
    this.groupOffset += 100;
    this.appService
      .getUserGroups({user_id: this.currentUser.uid,
                      user_access_token: this.authService.cookies.access_token,
                      count: 100, offset: this.groupOffset})
      .then((response: any) => {
                    const groupList = response.groups.filter((group) => {
                      if (!group.deactivated) {
                        this.currentUserGroups.push(group);
                      }
                    });
      })
  }

  ngOnInit() {
    this.authService.update();
  }
}
