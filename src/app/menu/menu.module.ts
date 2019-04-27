import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopMenuComponent } from './top-menu/top-menu.component'
import { SideMenuComponent } from './side-menu/side-menu.component'
import { MenuRoutingModule } from './menu-routing.module'

import { FormsModule }        from '@angular/forms';
import { Routes, RouterModule} from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import  { UserSharedModule }       from '../business-shared/user/user-shared.module';
import  { CustomScrollbarModule}       from '../shared/custom-scrollbar/custom-scrollbar.module';
import  { ModalModule}            from '../shared/modal/modal.module';





import { UserBusinessService} from '../business-service/user/user-business.service';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    NgbModule,
    UserSharedModule,
    CustomScrollbarModule,
    ModalModule
 ],
  declarations: [
    TopMenuComponent,
    SideMenuComponent
  ],
  providers: [UserBusinessService]
})
export class MenuModule { }
