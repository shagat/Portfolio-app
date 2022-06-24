import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { DataStorageService } from "src/app/shared/data_storage.service";
import { Work } from "../Work.model";
import { WorksService } from "../works-service";

@Component({
    selector: 'app-work-edit',
    templateUrl: 'work-edit.component.html',
    styleUrls: ['work-edit.component.css']
})
export class WorkEditComponent implements OnInit, OnDestroy {
    @ViewChild('workForm', { static: false }) wForm: NgForm;
    editedItemIndex: number = -1;
    editedItem: Work;
    subscription = new Subscription;
    editMode = false;

    constructor(private router: Router, private route: ActivatedRoute, private worksService: WorksService, private dataStorageService: DataStorageService) { }

    onSubmit() {
        this.editedItem = {
            heading: this.wForm.value.fheading,
            imageUrl: this.wForm.value.fimageUrl,
            details: this.wForm.value.fdetails,
            description: this.wForm.value.fdescription,
            workUrl: this.wForm.value.fworkUrl
        }
        if (this.editMode) {
            this.worksService.updateWork(this.editedItemIndex, this.editedItem);
            this.onCancel()
        } else {
            this.worksService.addWork(this.wForm.value);
            this.onCancel()
        }
    }

    onCancel() {
        this.editMode = false;
        this.router.navigate(['works'])
    }

    onDelete() {
        console.log('delete');
        this.worksService.deleteWork(this.editedItemIndex);
        this.onCancel();
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
                    fheading: this.editedItem.heading,
                    fdetails: this.editedItem.details,
                    fworkUrl: this.editedItem.workUrl,
                    fdescription: this.editedItem.description,
                    fimageUrl: this.editedItem.imageUrl
                })
            }, 0);
        } else {
            this.editMode = false;
            // console.log(this.editMode)
        }
    }

    onStore() {
        this.dataStorageService.storeWorks()
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}