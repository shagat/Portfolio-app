import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule, Routes } from '@angular/router';

import { FirstSectionComponent } from './components/first-section/first-section.component';
import { SecondSectionComponent } from './components/second-section/second-section.component';
import { ThirdSectionComponent } from './components/third-section/third-section.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { WorksFirstSectionComponent } from './components/works-first-section/works-first-section.component';
import { ContactFirstSectionComponent } from './components/contact-first-section/contact-first-section.component';

const appRoutes : Routes = [
  {path: '', component : FirstSectionComponent},
  {path: 'works', component:WorksFirstSectionComponent},
  {path: 'contact', component:ContactFirstSectionComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FirstSectionComponent,
    SecondSectionComponent,
    ThirdSectionComponent,
    NavBarComponent,
    WorksFirstSectionComponent,
    ContactFirstSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, {enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
