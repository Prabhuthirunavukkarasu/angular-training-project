import { Injectable } from '@angular/core';
import { login } from '../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements login {

  constructor() { }

  doLogin(uname: string, psw: string) {
    if (uname == 'admin' && psw == 'admin') {
      sessionStorage.setItem('isLoggedIn', "true");
      return true;
    } else {
      return false;
    }
  }

  doLogout() {
    sessionStorage.removeItem("isLoggedIn");
  }

  isLoggedin() {
    return sessionStorage.getItem("isLoggedIn") == "true" ? true : false;
  }
}
