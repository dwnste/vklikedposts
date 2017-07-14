import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Observable } from 'rxjs/Observable';

import { AppService } from '../app.service';

import * as qs from 'query-string';

import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  cookies;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              public appService: AppService) {};

  update() {
    this.cookies = Cookie.getAll();
  }

  removeCookie(rName: string) {
    this.update();
    Cookie.delete(rName);
  }

  setCookie({rName, rValue, rExpires}) {
    this.cookies = Cookie.set(rName, rValue, rExpires);
    this.update();
  }

  login() {
    document.location.href = environment.get_token_url;
  }

  logout() {
    this.removeCookie('access_token');
    this.update();
  }

  loggedIn() {
      this.update();
      return 'access_token' in this.cookies ? true : false;
  }

  getAndSetCookie() {
    const routeFragment: Observable<string> = this.activatedRoute.fragment;
    routeFragment.subscribe(fragment => {
      if (('access_token' && 'user_id' && 'expires_in') in qs.parse(fragment)) {
        this.setCookie({
          rName: 'access_token',
          rValue: qs.parse(fragment).access_token,
          rExpires: (qs.parse(fragment).expires_in / 60 / 60 / 24)});

          this.update();
      }
      this.router.navigate(['/']);
    });
  }
}

