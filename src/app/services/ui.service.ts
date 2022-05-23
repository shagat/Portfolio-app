import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private subject = new Subject<any>();
  private togglePageKey : number = 1;

  constructor() { }

  toggleCheckedMain(){
    this.togglePageKey = 1
    console.log(this.togglePageKey)
    this.subject.next(this.togglePageKey)
  }

  toggleCheckedWork(){
    this.togglePageKey = 2
    console.log(this.togglePageKey)
    this.subject.next(this.togglePageKey)
  }

  toggleCheckedContact(){
    this.togglePageKey = 3
    console.log(this.togglePageKey)
    this.subject.next(this.togglePageKey)
  }

  onToggle(): Observable<any>{
    return this.subject.asObservable();
  }

}
