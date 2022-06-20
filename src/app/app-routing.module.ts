import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './home/hero/hero.component';
import { WorksFirstSectionComponent } from './components/works-first-section/works-first-section.component';
import { ContactFirstSectionComponent } from './components/contact/contact-first-section.component';

const routes : Routes = [
  {path: '', component : HeroComponent},
  {path: 'works', component:WorksFirstSectionComponent},
  {path: 'contact', component:ContactFirstSectionComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
