import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { PubsubService } from '../services/pubsub.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  uname: string;
  psw: string;
  message: string = "";
  constructor(private loginService: LoginService, private router: Router, private pubsub: PubsubService) { }

  doLogin(uname: string, psw: string) {
    // this.loginService.doLogin(uname, psw) should return token from service
    if (this.loginService.doLogin(uname, psw)) {
      this.pubsub.getLoginPublisher().next("loggedInToken");
      this.router.navigate(['/movies']);
    } else {
      this.message = "Invalid username or password";
    }
  }

}


