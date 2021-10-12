import { Component, Input, AfterViewInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../../service/app/app.service';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-layout-sidenav',
  templateUrl: './layout-sidenav.component.html',
  styles: [':host { display: block; }']
})
export class LayoutSidenavComponent implements AfterViewInit {
  @Input() orientation = 'vertical';

  @HostBinding('class.layout-sidenav') hostClassVertical = false;
  @HostBinding('class.layout-sidenav-horizontal') hostClassHorizontal = false;
  @HostBinding('class.flex-grow-0') hostClassFlex = false;

  toogleIsOpen: boolean;
  executiveSumm: boolean;

  constructor(private router: Router, private appService: AppService, private layoutService: LayoutService) {
    // Set host classes
    this.hostClassVertical = this.orientation !== 'horizontal';
    this.hostClassHorizontal = !this.hostClassVertical;
    this.hostClassFlex = this.hostClassHorizontal;
    this.toogleIsOpen = false;
  }

  ngAfterViewInit() {
    this.layoutService._redrawLayoutSidenav();
  }

  getClasses() {
    let bg = this.appService.layoutSidenavBg;

    if (this.orientation === 'horizontal' && (bg.indexOf(' sidenav-dark') !== -1 || bg.indexOf(' sidenav-light') !== -1)) {
      bg = bg
        .replace(' sidenav-dark', '')
        .replace(' sidenav-light', '')
        .replace('-darker', '')
        .replace('-dark', '');
    }

    return `${this.orientation === 'horizontal' ? 'container-p-x ' : ''} bg-${bg} `;
  }

  hovering(){
    if(this.layoutService.isCollapsed()) {
      this.layoutService.toggleCollapsed()
    }
  }

  goToLink() {
    window.open(`/report-detail`, "_blank");
  }
  isActive(url) {
    return this.router.isActive(url, true);
  }

  isMenuActive(url) {
    return this.router.isActive(url, false);
  }

  isMenuOpen(url) {
    return this.router.isActive(url, false) && this.orientation !== 'horizontal';
  }

  toggleSidenav() {
   if(!this.layoutService.isCollapsed()){
     this.layoutService.toggleCollapsed();
   }
  }

  isCollapsed(){
    return this.layoutService.isCollapsed()
  }
}
