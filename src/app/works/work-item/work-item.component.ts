import { Component, Input } from "@angular/core";
import { Work } from "../Work.model";

@Component({
    selector: 'app-work-item',
    templateUrl: './work-item.component.html',
    styleUrls: [
        './work-item.component.css'
    ]
})
export class WorkItemComponent {
@Input() work: Work;
@Input() index: number = -1;
}