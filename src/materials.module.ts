import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs'
import{MatRadioModule} from '@angular/material/radio'
@NgModule({
    exports: [
        MatTabsModule,
        MatRadioModule,
    ]
})
export class MaterialModule {}