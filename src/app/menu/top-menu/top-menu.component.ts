import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ModalService } from '@app/shared/modal/modal.service';
import { ConfirmConfig } from '@app/shared/modal/modal-model';

import { AvatarCropperComponent } from '@app/business-shared/user/avatar-cropper/avatar-cropper.component';
import { PasswordEditComponent } from '@app/business-shared/user/password-edit/password-edit.component';
import { AppService } from '@app/app.service';

import { HttpService } from '@app/shared/http/http.service';
import { UserBusinessService} from '@app/business-service/user/user-business.service';
import { ToastService } from '@app/shared/toast/toast.service';
import { ToastConfig, ToastType } from '@app/shared/toast/toast-model';
import { Utils } from "@app/shared/util/utils";

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

  title: string = "首页";
  //切换导航
  toggleDescTip: string = "点击关闭导航菜单";

  //切换导航标识
  navClose: boolean = false;


  constructor( 
    private router: Router,
    private modalService: ModalService, 
    private ngbModalService: NgbModal, 
    private appService: AppService,
    private httpService: HttpService,
    private userBusinessService: UserBusinessService,
    private toastService: ToastService) 
  {
    this.appService.titleEventEmitter.subscribe((value: string) => {
      if (value) {
        this.title = value;
    }
  })
  }

  ngOnInit() {
  }

  /**
    * 切换导航
  */
  toggleNav() {
    this.navClose = !this.navClose;
    if (this.navClose) {
      this.toggleDescTip = "点击展开导航菜单";
    } else {
      this.toggleDescTip = "点击关闭导航菜单";
    }
  }

  /**
   * 个人资料
   */
  userInfo() {
    this.router.navigate(['/app/user/userInfo']);
  }

  /**
   * 头像更换
   */
  avatarReplacement() {
    this.ngbModalService.open(AvatarCropperComponent, { size: 'lg', backdrop: 'static', keyboard: false }).result.then((result) => {

    }, (reason) => {

    });
  }

  /**
   * 修改密码
   */
  passwordEdit() {
    this.ngbModalService.open(PasswordEditComponent, { size: 'lg' }).result.then((result) => {

    }, (reason) => {

    });
  }
  /**
   * 跳转首页
   */
  toHome() {
    this.title = "首页";
    this.router.navigate(['/app/home']);
  }

    /**
   * 退出系统
   */
  exitSys() {
    let exitSysCfg = new ConfirmConfig('您确定退出系统吗？');
    this.modalService.confirm(exitSysCfg).then((result) => {
      if (result.status == "approved") {
        let that = this;
        this.httpService.post(this.userBusinessService.logout(), {}, function (successful, data, res) {
          if (successful && Utils.resultSuccess(data.resultType)) {
            const toastCfg = new ToastConfig(ToastType.SUCCESS, '', data.resultMsg, 3000);
            that.toastService.toast(toastCfg);
            that.router.navigate(['/login']);
          }else if(successful && Utils.resultFailure(data.resultType)){
            const toastCfg = new ToastConfig(ToastType.WARNING, '', data.resultMsg, 3000);
            that.toastService.toast(toastCfg);
          }else{
            const toastCfg = new ToastConfig(ToastType.ERROR, '', data.resultMsg, 3000);
            that.toastService.toast(toastCfg);
          }
        }, function (successful, msg, err) {
           const toastCfg = new ToastConfig(ToastType.ERROR, '', msg, 3000);
           that.toastService.toast(toastCfg);
        });
        this.router.navigate(['/login']);
      }
    }, (reason) => {
    });
  }
}
