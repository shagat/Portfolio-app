import { Component, OnInit, Host, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.css']
})
export class FirstSectionComponent implements OnInit {
  
constructor() {
   }

  ngOnInit(): void {}
  
  scrollDown(){
    console.log("Hello")
  }
}
