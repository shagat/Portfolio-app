import { Component, OnInit } from '@angular/core';
import { AboutService } from '../../about.service';
import { About } from '../../About.model';

@Component({
  selector: 'app-home-about',
  templateUrl: './home-about.component.html',
  styleUrls: ['./home-about.component.css']
})
export class HomeAboutComponent implements OnInit {
  abouts: About[]=[];

  constructor(private aboutService: AboutService) { }

  ngOnInit(): void {
    this.abouts = this.aboutService.getAbouts();
  }

}
