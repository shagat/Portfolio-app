import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  correctPath:boolean= true;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.pathFromRoot);
  }

}
