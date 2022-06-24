import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { Work } from "../Work.model";
import { WorksService } from "../works-service";

@Component({
    selector: 'app-work-edit',
    templateUrl: 'work-edit.component.html',
    styleUrls: ['work-edit.component.css']
})
export class WorkEditComponent implements OnInit, OnDestroy {
    @ViewChild('workForm', { static: false }) wForm: NgForm;
    id: number = -1;
    work: Work;
    subscription = new Subscription;
    editMode = false;

    constructor(private router: Router, private route: ActivatedRoute, private worksService: WorksService) { }

    onSubmit() {
        if (this.editMode){

            console.log(this.editMode)
            this.worksService.updateWork(this.id, this.wForm.value);
            // console.log(this.id, this.wForm.value)
            this.onCancel()
        } else {
            this.worksService.addWork(this.wForm.value);
            this.onCancel()
        }
    }

    onCancel() {
        this.router.navigate(['works'])
    }

    onDelete() {
        console.log('delete');
        this.worksService.deleteWork(this.id);
        this.onCancel();
    }

    ngOnInit(): void {
        this.subscription = this.route.params.subscribe((params: Params) => {
            this.id = +params['id'];
            this.work = this.worksService.getWork(this.id)
        })
        if (this.work){
            this.editMode = true;
            setTimeout(() => {
                this.wForm.setValue({
                    fheading: this.work.heading,
                    fdetails: this.work.details,
                    fworkUrl: this.work.workUrl,
                    fdescription: this.work.description,
                    fimageUrl: this.work.imageUrl
                })}, 0);
            } else{
                this.editMode = false;
        }
    }

    // ngAfterViewInit(): void {
    //     this.subscription.unsubscribe();
    // }

    ngOnDestroy(): void {
    }
}