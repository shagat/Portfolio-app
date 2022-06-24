import { Component, OnInit } from '@angular/core';
import { AboutService } from '../about.service';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
    clickAnimate: boolean = true;
    imgSrc: { imgName: string, imgLink: string } = { imgName: '', imgLink: '' };

    constructor(private aboutService: AboutService) {
    }
    ngOnInit(): void {
        this.imgSrc = this.aboutService.getImgSrc();
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
