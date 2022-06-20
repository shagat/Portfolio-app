import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/materials.module';

import { AppComponent } from './app.component';
import {HeroComponent} from './home/hero/hero.component'

import { SecondSectionComponent } from './components/second-section/second-section.component';
import { ThirdSectionComponent } from './components/third-section/third-section.component';
import { WorksFirstSectionComponent } from './components/works-first-section/works-first-section.component';
import { ContactFirstSectionComponent } from './components/contact/contact-first-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SecondSectionComponent,
    ThirdSectionComponent,
    WorksFirstSectionComponent,
    ContactFirstSectionComponent,
    HeroComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
