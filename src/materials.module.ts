import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list'

@NgModule({
  exports: [
    MatInputModule,
    MatTabsModule,
    MatListModule,
    
  ]
})
export class MaterialModule { }