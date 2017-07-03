import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { AuthComponent } from './auth/auth.component';


export const APP_ROUTES: Routes = [
  {
    path: '',
    component: FeedComponent
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: '**', redirectTo: '' // FIXME: ADD 404
  }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
