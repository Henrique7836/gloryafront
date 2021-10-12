import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    name: string;

    constructor(
        private router: Router,
    ) {
        // this.authService.onLogin.subscribe(() => this.bindUserName());
        // this.authService.onLogout.subscribe(() => this.bindUserName());
    }

    ngOnInit() {
        this.bindUserName();
    }

    bindUserName() {
        // if (this.authService.isLoggedIn()) {
        //     this.name = this.authService.getUserName();
        // }
        // else {
        //     this.name = null;
        // }
    }

    logout() {
        // this.authService.logout();
    }

    login() {
        // this.authService.startAuthentication();
    }
}
