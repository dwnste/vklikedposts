import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef, MdSnackBar} from '@angular/material';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data;
  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.getWallPosts().then((response) => {
    }).catch((e)=>{console.log(e)});
  }
}
