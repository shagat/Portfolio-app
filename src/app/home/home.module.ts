import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { AboutResoloverService } from "./abouts-resolver.service";
import { HeroComponent } from "./hero/hero.component";
import { HomeAboutComponent } from "./hero/home-about/home-about.component";

@NgModule({
    declarations:[
        HeroComponent,
        HomeAboutComponent
    ],
    imports:[
        SharedModule,
        RouterModule.forChild([
            { path: '', component: HeroComponent, pathMatch: 'full', resolve:[AboutResoloverService] },
        ])
    ]
})
export class HomeModule {}