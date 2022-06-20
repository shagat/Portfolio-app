import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from 'src/materials.module';

import { AppComponent } from './app.component';
import {HeroComponent} from './home/hero/hero.component'

import { WorksFirstSectionComponent } from './components/works-first-section/works-first-section.component';
import { ContactFirstSectionComponent } from './components/contact/contact-first-section.component';
import { HomeAboutComponent } from './home/hero/home-about/home-about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorksFirstSectionComponent,
    ContactFirstSectionComponent,
    HeroComponent,
    HomeAboutComponent,

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
