import { Component, OnInit } from '@angular/core';
import { PubsubService } from '../services/pubsub.service';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  WebSiteName = "IMDB";
  searchString: any = "Search anything";
  loggedIn: boolean = false;

  constructor(private pubsub: PubsubService, private loginService: LoginService, private router: Router) { }

  ngOnInit() {

    // TO LISTEN PUBLISHING EVENT
    this.pubsub.getLoginSubscriber().subscribe((result) => {
      if (result == "loggedInToken") { this.loggedIn = true; }
    });

    // WHILE REFRESH EVENT OCCURS - CHECKS SESSION STORAGE
    let isLoggedIn: boolean = this.loginService.isLoggedin();
    if (isLoggedIn) {
      this.loggedIn = isLoggedIn;
    } else {
      // this.logOut();
    }

  }

  logOut() {
    this.loggedIn = false;
    this.loginService.doLogout();
    this.router.navigate(['/login']);
  }

  search(name: string) {
    alert(name);
  }

}
