import { Component, OnInit, ViewChild } from '@angular/core';
import { About } from '../About.model';
import { environment } from 'src/environments/environment';
import { AboutService } from '../about.service';
import { DataStorageService } from 'src/app/shared/data_storage.service';

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
    
    constructor(private aboutService: AboutService, private dataStorageService: DataStorageService) {}
    
    ngOnInit(): void {
        this.imgSrc = environment.imgSrc.imgLink
        this.imgName = environment.imgSrc.imgName
        this.abouts = this.aboutService.getAbouts();;
        console.log(this.abouts);
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
