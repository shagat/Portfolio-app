import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { MatGridListModule } from '@angular/material/grid-list'
import {MatFormFieldModule} from '@angular/material/form-field'
@NgModule({
    exports: [
        MatFormFieldModule,
        MatCardModule,
        MatGridListModule,
    ]
})
export class MaterialModule { }