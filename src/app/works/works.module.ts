import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { WorkItemComponent } from "./work-item/work-item.component";
import { WorksDetailsComponent } from "./works-details/works-details.component";
import { WorksListComponent } from "./works-list/works-list.component";
import { WorksRoutingModule } from "./works-routing.module";
import { WorksComponent } from "./works.component";
import { WorkEditComponent } from "./work-edit/work-edit.component";

@NgModule({
    declarations: [
        WorksComponent,
        WorksListComponent,
        WorkItemComponent,
        WorksDetailsComponent,
        WorkEditComponent
    ],
    imports:[
        RouterModule,
        SharedModule,
        WorksRoutingModule
    ]
})
export class WorksModule {}