import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/materials.module";
import { AlertComponent } from "./alert.component";
import { LoadingSpinner } from "./loading-spinner.component";
import { ShortenPipe } from "./shorten.pipe";

@NgModule({
    declarations: [
        AlertComponent,
        LoadingSpinner,
        ShortenPipe
    ],
    imports: [
        MaterialModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        AlertComponent,
        LoadingSpinner,
        ShortenPipe,
        MaterialModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class SharedModule {}