import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list'
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon'

@NgModule({
  exports: [
    MatInputModule,
    MatTabsModule,
    MatListModule,
    MatFormFieldModule,
    MatIconModule
  ]
})
export class MaterialModule { }