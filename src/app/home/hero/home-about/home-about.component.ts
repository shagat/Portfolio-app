import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-home-about',
  templateUrl: './home-about.component.html',
  styleUrls: ['./home-about.component.css']
})
export class HomeAboutComponent {
@Input('heading') heading : string;
@Input('about_desc') about_desc : string;
}
