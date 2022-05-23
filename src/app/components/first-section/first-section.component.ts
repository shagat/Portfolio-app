import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.css']
})
export class FirstSectionComponent implements OnInit {
  togglePageKey : number = 1;
  subscription! : Subscription;

constructor(private uiService:UiService) {
  this.subscription = this.uiService
    .onToggle()
    .subscribe(
      (value) => (this.togglePageKey = value)
      )
}

  ngOnInit(): void {}
  
  scrollDown(){
    console.log("Hello")
  }
}
