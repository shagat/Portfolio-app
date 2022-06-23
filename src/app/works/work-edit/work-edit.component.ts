import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'app-work-edit',
    templateUrl: 'work-edit.component.html',
    styleUrls: ['work-edit.component.css']
})
export class WorkEditComponent {
constructor(private router: Router, private route: ActivatedRoute){}
    onSave(form:NgForm){
        console.log(form)
    }
    onCancel() {
        this.router.navigate(['works'])
      }
    onDelete() {
        console.log('delete');
      }
}