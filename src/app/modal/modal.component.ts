import { Component, OnInit, Input } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { AppService } from '../app.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() post: any;
  items: any;
  offset: 0;
  count: 0;

  constructor(public appService: AppService,
              public authService: AuthService) {}

  openUserPage(uid) {
    window.open(`https://vk.com/id${uid}`, '_blank');
  }

  getMoreLikes() {
    this.appService.getLikes({
      owner_id: this.post.from_id,
      item_id: this.post.id,
      user_access_token: this.authService.cookies.access_token,
      offset: this.offset
    }).then((response: any) => {
      this.items = this.items.concat(response.items);
      this.offset = this.items.length;
    });
  }

  ngOnInit() {
    this.appService.getLikes({
      owner_id: this.post.from_id,
      item_id: this.post.id,
      user_access_token: this.authService.cookies.access_token
    }).then((response: any) => {
      this.count = response.count;
      this.items = response.items;
      this.offset = response.items.length;
    });
  }
}
