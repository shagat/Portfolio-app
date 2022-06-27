import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { DataStorageService } from "src/app/shared/data_storage.service";
import { Work } from "../Work.model";
import { WorksService } from "../works-service";
import { CanComponentDeactivate } from "src/app/shared/can-deactivate-guard.service";

@Component({
    selector: 'app-work-edit',
    templateUrl: 'work-edit.component.html',
    styleUrls: ['work-edit.component.css']
})
export class WorkEditComponent implements OnInit, OnDestroy, CanComponentDeactivate {
    @ViewChild('workForm', { static: false }) wForm: NgForm;
    editedItemIndex: number = -1;
    editedItem: Work;
    defaultImage = 'default';
    subscription = new Subscription;
    editMode = false;


    constructor(private router: Router, private route: ActivatedRoute, private worksService: WorksService, private dataStorageService: DataStorageService) { }

    onSubmit() {
        if (this.editMode) {
            if (confirm('Confirm your changes?')) {
                this.worksService.updateWork(this.editedItemIndex, this.wForm.value);
                this.dataStorageService.storeWorks();
                this.onCancel()
            }
        } else {
            if (confirm('Confirm new entry?')) {
                this.worksService.addWork(this.wForm.value);
                this.dataStorageService.storeWorks();
                this.onCancel()
            }
        }
    }

    onCancel() {
        this.wForm.reset();
        this.editMode = false;
        this.router.navigate(['works'])
    }

    onDelete() {
        if (confirm('Delte this item?')){
            this.worksService.deleteWork(this.editedItemIndex);
            this.onCancel();
        }
    }

    ngOnInit(): void {
        this.subscription = this.route.params.subscribe((params: Params) => {
            this.editedItemIndex = +params['id'];
            this.editedItem = this.worksService.getWork(this.editedItemIndex)
        })
        if (this.editedItem) {
            this.editMode = true;
            setTimeout(() => {
                this.wForm.setValue({
                    heading: this.editedItem.heading,
                    details: this.editedItem.details,
                    workUrl: this.editedItem.workUrl,
                    description: this.editedItem.description,
                    imageUrl: this.editedItem.imageUrl
                })
            }, 0);
        } else {
            this.editMode = false;
        }
    }

    canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
        if (this.wForm.dirty && this.wForm.touched && this.editMode) {
            return confirm('Do you want to discard the changes');
        } else {
            return true;
        }
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
        this.dataStorageService.fetchWorks();
    }
}