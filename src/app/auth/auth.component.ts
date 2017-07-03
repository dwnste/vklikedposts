import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  state = {
    access_token: <string>'',
    user_id: <string>'',
    expires_in: <number>0
  }

  constructor(private activatedRoute: ActivatedRoute,
              private authService: AuthService) {}

  ngOnInit() {
    this.authService.login();
  }

}
