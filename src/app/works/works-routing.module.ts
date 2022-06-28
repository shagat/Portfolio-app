import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WorksComponent } from "./works.component";
import { WorkEditComponent } from "./work-edit/work-edit.component";
import { WorksDetailsComponent } from "./works-details/works-details.component";
import { WorksListComponent } from "./works-list/works-list.component";
import { AuthGuard } from "../auth/auth.guard";
import { CanDeactivateGuard } from "../shared/can-deactivate-guard.service";
import { WorksResolverService } from "./works-resolver.service";

const routes: Routes = [
    { path: '', component: WorksComponent ,children:[
        { path: '', component: WorksListComponent, resolve: [WorksResolverService] },
        { path: 'new', component: WorkEditComponent, canActivate: [AuthGuard],canDeactivate: [CanDeactivateGuard] },
        { path: ':id', component: WorksDetailsComponent, resolve: [WorksResolverService] },
        { path: ':id/edit', component: WorkEditComponent, canActivate: [AuthGuard], resolve: [WorksResolverService], canDeactivate: [CanDeactivateGuard] },
      ] },
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WorksRoutingModule{}