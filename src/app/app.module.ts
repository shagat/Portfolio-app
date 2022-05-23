import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FirstSectionComponent } from './components/first-section/first-section.component';
import { SecondSectionComponent } from './components/second-section/second-section.component';
import { ThirdSectionComponent } from './components/third-section/third-section.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { WorksFirstSectionComponent } from './components/works-first-section/works-first-section.component';
import { WorksSecondSectionComponent } from './components/works-second-section/works-second-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FirstSectionComponent,
    SecondSectionComponent,
    ThirdSectionComponent,
    NavBarComponent,
    WorksFirstSectionComponent,
    WorksSecondSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
