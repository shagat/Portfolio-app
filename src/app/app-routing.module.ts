import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroComponent } from './home/hero/hero.component';
import { ContactComponent } from './contact/contact.component';
import { WorksListComponent } from './works/works-list/works-list.component';
import { WorksDetailsComponent } from './works/works-details/works-details.component';
import { WorksComponent } from './works/works.component';
import { WorkEditComponent } from './works/work-edit/work-edit.component';

const routes: Routes = [
  { path: '', component: HeroComponent, pathMatch: 'full' },
  {
    path: 'works', component: WorksComponent, children: [
      { path: '', component: WorksListComponent },
      { path: 'new', component: WorkEditComponent },
      { path: ':id', component: WorksDetailsComponent },
      { path: ':id/edit', component: WorkEditComponent },
    ]
  },
  { path: 'contact', component: ContactComponent },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
