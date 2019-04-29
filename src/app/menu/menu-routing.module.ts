import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { TopMenuComponent }   from '@app/menu/top-menu/top-menu.component';
import { SideMenuComponent }   from '@app/menu/side-menu/side-menu.component';

// https://angular.io/api/router/Route#properties
const mainRoutes: Routes = [
  {path: 'home', component: TopMenuComponent},
  {path: 'side', component: SideMenuComponent},
  {path: 'top', component: TopMenuComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(mainRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MenuRoutingModule { }
