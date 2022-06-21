import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroComponent } from './home/hero/hero.component';
import { ContactComponent } from './contact/contact.component';
import { WorksListComponent } from './works/works-list/works-list.component';

const routes : Routes = [
  {path: '', component : HeroComponent},
  {path: 'works', component:WorksListComponent},
  {path: 'contact', component:ContactComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
