import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';

import { AppComponent } from './app.component';
import { HeroComponent } from './home/hero/hero.component'

import { WorksFirstSectionComponent } from './components/works-first-section/works-first-section.component';
import { HomeAboutComponent } from './home/hero/home-about/home-about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorksFirstSectionComponent,
    HeroComponent,
    HomeAboutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
