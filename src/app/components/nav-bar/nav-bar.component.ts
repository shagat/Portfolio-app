import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  private togglePageKey : number = 1;

  subscription!:Subscription;

  constructor(private uiService:UiService) {
    this.subscription = this.uiService
    .onToggle()
    .subscribe(
      (value) => (this.togglePageKey = value)
      )
   }

  ngOnInit(): void {
  }

  toggleCheckedMain() {
    this.uiService.toggleCheckedMain();
  }
  toggleCheckedWork() {
    this.uiService.toggleCheckedWork();
  }
  toggleCheckedContact() {
    this.uiService.toggleCheckedContact();
  }
}
