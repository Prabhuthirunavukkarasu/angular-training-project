export interface login {
    doLogin(uname: string, psw: string);
    doLogout();
    isLoggedin();
  }