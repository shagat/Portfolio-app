import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeModule } from './home/home.module';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module')
.then(m => HomeModule) },
  {
    path: 'works', loadChildren: () => import('./works/works.module')
      .then(m => m.WorksModule)
  },
  {
    path: 'login', loadChildren: () => import('./auth/auth.module')
      .then(m => m.AuthModule)
  },
  {
    path: 'contact', loadChildren: () => import('./contact/contact.module')
      .then(m => m.ContactModule)
  },
  { path: 'not-found', component: PageNotFoundComponent, data: { message: 'Page Not Found' } },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }