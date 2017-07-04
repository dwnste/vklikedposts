import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { Cookie } from 'ng2-cookies/ng2-cookies';

import { AppService } from '../app.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  readonly TIMEOUT_STEP = 400;
  posts = [];
  timer = 0;
  counter = 0;
  selectedTab = 1;
  constructor(private appService: AppService,
              private authService: AuthService) {}

  getAndFilterPosts({owner_id, user_id, count, user_access_token}) {
    if (this.authService.loggedIn()) {
      this.appService.getWallPosts({
        owner_id: owner_id,
        count: count,
        user_access_token: user_access_token })
          .catch((e) => { console.log(e) })
          .then((response: any) => {
            let timeOut = 0;
            response.posts.map((post) => {
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
                  });
              }, timeOut);
            });
            this.timer = timeOut;
          });
      }
    this.counter = 0;
  }

  showOriginal(post) {
    if (post.post_type === 'post') {
      document.location.href = `https://vk.com/wall${post.to_id}_${post.id}`
    }
  }

  submitForm(event: Event, data: any) {
    this.posts = [];
    event.preventDefault();
    this.selectedTab = 0;
    this.getAndFilterPosts({
      owner_id: data.group_id,
      user_id: data.user_id,
      count: data.posts_count,
      user_access_token: this.authService.cookies.access_token});
  }

  ngOnInit() {}
}
