import { Component, Input, HostBinding } from '@angular/core';
import { AppService } from '../../../service/app/app.service';
import { LayoutService } from '../layout.service';
import { Router } from '@angular/router';
import { smoothlyMenu } from '../../../app.helpers';
declare var jQuery: any;
@Component({
  selector: 'app-layout-navbar',
  templateUrl: './layout-navbar.component.html',
  styles: [':host { display: block; }']
})
export class LayoutNavbarComponent {
  isExpanded = false;
  isRTL: boolean;
  name: string;
  loading = true;

  permissions = {};
  serverUrl;
  isLoading;

  @Input() sidenavToggle = true;

  @HostBinding('class.layout-navbar') hostClassMain = true;

  constructor(
    private appService: AppService,
    private layoutService: LayoutService,
    private router: Router
  ) {
    this.isRTL = appService.isRTL;
    this.isLoading = true;
  }

  currentBg() {
    return `bg-${this.appService.layoutNavbarBg}`;
  }

  toggleSidenav() {
    this.layoutService.toggleCollapsed();
  }

  ngAfterViewChecked(): void {
      // if (this.isLoggedIn()) {
      //   this.name = this.authService.getUserName();
      //   this.serverUrl = this.authService['configService']['config']['sso']['serverUrl'];
      //   this.menuLogin();
      // }
  }

  isLoggedIn(){{
    // return this.authService.isLoggedIn();
  }}

  menuLogin() {
    // this.menuPermissionService.permissionOfMenu().subscribe(e => {
    //   e.forEach(p => {
    //     this.permissions[p] = true;
    //   });
    // },
    //   err => {
    //     this.alertService.showMessage('error', `${err}`, 'Erro')
    //   })
    //   .add(e => this.loading = false);
  }

  toggleNavigation(): void {
    jQuery('body').toggleClass('mini-navbar');
    smoothlyMenu();
  }

  activeRoute(routename: string): boolean {
    return this.router.url.indexOf(routename) > -1;
  }

  logout() {
    // this.authService.logout();
  }

  login() {
    // this.authService.startAuthentication();
  }

  resetPassword() {
    window.location.href = `${this.serverUrl}/Password`;
  }

  TwoFactorAuthentication() {
    window.location.href = `${this.serverUrl}/Password/TwoFactorAuthentication`;
  }
}
