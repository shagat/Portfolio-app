import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.css']
})
export class FirstSectionComponent implements OnInit {
clickAnimate : boolean = true;
constructor() {
}

  ngOnInit(): void {}

  typingAnimateToggle(){
    this.clickAnimate = false;
    setTimeout(() => {
      this.clickAnimate = true;}, 500);
  }

  scrollDown(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }
}
