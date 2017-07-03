import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';

import 'hammerjs';

import { routing, appRoutingProviders } from './app.routes';

import { AuthComponent } from './auth/auth.component';
import { FeedComponent } from './feed/feed.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    routing
  ],
  providers: [ AppService, AuthService, appRoutingProviders ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
