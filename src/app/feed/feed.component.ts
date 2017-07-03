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
  posts;
  cookie;
  url_to_get_token = 'https://oauth.vk.com/authorize?client_id=6099251&scope=8192&redirect_uri=localhost:4200/auth&response_type=token';
  constructor(private appService: AppService,
              private authService: AuthService) {}

  ngOnInit() {
    if (this.authService.loggedIn()) {
      this.appService.getWallPosts({
        owner_id: -87396564,
        user_access_token: this.authService.cookies.access_token })
          .then((response: any) => {
            this.posts = response.posts;
            console.log(this.posts);
            this.posts = this.posts.map((post) => {
              post.text = post.text.replace('<br>', ' ')
              return post;
            })
          })
          .catch((e) => { console.log(e) });
      }
    }
}
