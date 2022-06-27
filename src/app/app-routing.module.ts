import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroComponent } from './home/hero/hero.component';
import { ContactComponent } from './contact/contact.component';
import { WorksListComponent } from './works/works-list/works-list.component';
import { WorksDetailsComponent } from './works/works-details/works-details.component';
import { WorksComponent } from './works/works.component';
import { WorkEditComponent } from './works/work-edit/work-edit.component';
import { WorksResolverService } from './works/works-resolver.service';
import { CanDeactivateGuard } from './shared/can-deactivate-guard.service';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { AboutResoloverService } from './home/abouts-resolver.service';

const routes: Routes = [
  { path: '', component: HeroComponent, pathMatch: 'full', resolve:[AboutResoloverService] },
  { path: 'works', component: WorksComponent, children:[
    { path: '', component: WorksListComponent, resolve: [WorksResolverService] },
    { path: 'new', component: WorkEditComponent,canActivate:[AuthGuard] ,canDeactivate: [CanDeactivateGuard] },
    { path: ':id', component: WorksDetailsComponent, resolve: [WorksResolverService] },
    { path: ':id/edit', component: WorkEditComponent, resolve: [WorksResolverService], canActivate:[AuthGuard], canDeactivate: [CanDeactivateGuard] },
  ] },
  { path: 'login', component: AuthComponent },
  { path: 'contact', component: ContactComponent },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
