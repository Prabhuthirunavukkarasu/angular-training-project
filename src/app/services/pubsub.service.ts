import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class PubsubService {

  private subject: Subject<any>;
  private loginSubject: Subject<any>;

  constructor() {
    this.subject = new Subject();
    this.loginSubject = new Subject();
  }

  getPublisher(){
    return this.subject;
  }

  getSubscribers(){
    return this.subject.asObservable();
  }

  getLoginPublisher(){
    return this.loginSubject;
  }

  getLoginSubscriber(){
    return this.loginSubject.asObservable();
  }

}
