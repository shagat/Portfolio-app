import { Component, Input, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Work } from "../Work.model";
import { WorksService } from "../works-service";

@Component({
    selector: 'app-work-edit',
    templateUrl: 'work-edit.component.html',
    styleUrls: ['work-edit.component.css']
})
export class WorkEditComponent implements OnInit {
    id: number = 0;
    work!: Work;
    constructor(private router: Router, private route: ActivatedRoute, private worksService: WorksService) { }
    onSave(form: NgForm) {
        console.log(form)
    }
    onCancel() {
        this.router.navigate(['works'])
    }
    onDelete() {
        console.log('delete');
    }
    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.id = +params['id'];
            this.work = this.worksService.getWork(this.id);
            console.log(this.work)
        })
    }
}