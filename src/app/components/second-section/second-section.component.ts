import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-second-section',
  templateUrl: './second-section.component.html',
  styleUrls: ['./second-section.component.css']
})
export class SecondSectionComponent implements OnInit {
  togglePageKey : number = 1;
  subscription! : Subscription;

constructor(private uiService:UiService) {
  this.subscription = this.uiService
    .onToggle()
    .subscribe(
      (value) => (this.togglePageKey = value)
      )
}

  ngOnInit(): void {
  }

}
