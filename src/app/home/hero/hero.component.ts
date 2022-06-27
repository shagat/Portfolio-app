import { Component, OnInit } from '@angular/core';
import { About } from '../About.model';
import * as aboutService from '../about.service'

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
    clickAnimate: boolean = true;
    imgSrc: string;
    imgName: string;
    abouts: About[];

    constructor() {
    }
    ngOnInit(): void {
        this.imgSrc = aboutService.imgSrc.imgLink
        this.imgName = aboutService.imgSrc.imgName
        this.abouts = aboutService.about;
        console.log(this.abouts);
    }

    typingAnimateToggle() {
        this.clickAnimate = false;
        setTimeout(() => {
            this.clickAnimate = true;
        }, 500);
    }

    scrollDown(el: HTMLElement) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
}
