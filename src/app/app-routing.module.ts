import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroComponent } from './home/hero/hero.component';
import { ContactComponent } from './contact/contact.component';
import { WorksListComponent } from './works/works-list/works-list.component';
import { WorksDetailsComponent } from './works/works-details/works-details.component';

const routes : Routes = [
  {path: '', component : HeroComponent, pathMatch:'full'},
  {path: 'works', component:WorksListComponent, children: [
    {path: ':id', component: WorksDetailsComponent}
  ]},
  {path: 'contact', component:ContactComponent},
  // {path: 'work_details/:id', component:WorksDetailsComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
