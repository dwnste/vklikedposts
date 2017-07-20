import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2ImageGalleryModule } from 'ng2-image-gallery';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { FeedComponent } from './feed/feed.component';

import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';

import 'hammerjs';

import { routing, appRoutingProviders } from './app.routes';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    FeedComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2ImageGalleryModule,
    FormsModule,
    routing
  ],
  providers: [ AppService, AuthService, appRoutingProviders ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
