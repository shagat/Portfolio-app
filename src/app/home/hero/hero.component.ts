import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
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
