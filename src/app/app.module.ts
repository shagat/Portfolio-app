import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { HeroComponent } from './home/hero/hero.component'
import { HomeAboutComponent } from './home/hero/home-about/home-about.component';
import { WorksListComponent } from './works/works-list/works-list.component';
import { WorksDetailsComponent } from './works/works-details/works-details.component';
import { AuthComponent } from './auth/auth.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ShortenPipe } from './shared/shorten.pipe';
import { WorksComponent } from './works/works.component';
import { WorkEditComponent } from './works/work-edit/work-edit.component';
import { WorkItemComponent } from './works/work-item/work-item.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingSpinner } from './shared/loading-spinner.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MaterialModule } from 'src/materials.module';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { AlertComponent } from './shared/alert.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HeaderComponent,
    HeroComponent,
    HomeAboutComponent,
    WorksComponent,
    WorkItemComponent,
    WorksListComponent,
    WorksDetailsComponent,
    WorkEditComponent,
    AuthComponent,
    ShortenPipe,
    LoadingSpinner,
    AlertComponent,
    PageNotFoundComponent

  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    MatFormFieldModule,
    MaterialModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
