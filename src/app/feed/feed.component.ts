import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { Cookie } from 'ng2-cookies/ng2-cookies';

import { AppService } from '../app.service';
import { AuthService } from '../auth/auth.service';

import * as moment from 'moment';

moment.locale('ru');

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  posts;
  cookie;
  selectedTab = 1;
  url_to_get_token = 'https://oauth.vk.com/authorize?client_id=6099251&scope=8192&redirect_uri=localhost:4200/auth&response_type=token';
  constructor(private appService: AppService,
              private authService: AuthService) {}

  showContent({owner_id, user_id, count, user_access_token}) {
    if (this.authService.loggedIn()) {
      this.appService.getWallPosts({
        owner_id: owner_id,
        count: count,
        user_access_token: user_access_token })
          .then((response: any) => {
            this.posts = response.posts;
            this.posts = this.posts.map((post) => {
              post.text = post.text.replace(/<br\s*\/?>/gi, ' ');
              post.date = moment(post.date * 1000).format('LL');
              return post;
            })
          })
          .catch((e) => { console.log(e) });
      }
  }

  submitForm(event: Event, data: any) {
    event.preventDefault();
    console.log(data);
    this.showContent({
      owner_id: data.group_id,
      user_id: data.user_id,
      count: data.posts_count,
      user_access_token: this.authService.cookies.access_token});
    this.selectedTab = 0;
  }

  ngOnInit() {}
}
