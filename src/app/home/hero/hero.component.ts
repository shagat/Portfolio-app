import { Component, OnInit, ViewChild } from '@angular/core';
import { About } from '../About.model';
import { environment } from 'src/environments/environment';
import { AboutService } from '../about.service';

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
    
    constructor(private aboutService: AboutService) {}
    
    ngOnInit(): void {
        this.imgSrc = environment.imgSrc.imgLink
        this.imgName = environment.imgSrc.imgName
        this.abouts = this.aboutService.getAbouts();
    }

    typingAnimateToggle() {
        this.clickAnimate = false;
        setTimeout(() => {
            this.clickAnimate = true;
        }, 500);
    }

    onScrollClick(el: HTMLElement) {
        el.scrollIntoView({ behavior: 'smooth' });
    }

}
