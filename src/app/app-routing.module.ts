import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from '@app/error-page/page-not-found.component'

import {SelectivePreloadingStrategy} from "./selective-preloading-strategy";


/**
 * app路由
 */
const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { 
     path: 'login',  
     loadChildren: 'app/login/login.module#LoginModule'
  },
  { 
     path: 'app',  
     loadChildren: 'app/menu/menu.module#MenuModule'
  },
  {
     path:'**',
      component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
   RouterModule.forRoot(appRoutes,{preloadingStrategy: SelectivePreloadingStrategy, })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}


