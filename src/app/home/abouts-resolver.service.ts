import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { DataStorageService } from "../shared/data_storage.service";
import { About } from "./About.model";
import { AboutService } from "./about.service";

@Injectable({
    providedIn:'root'
})
export class AboutResoloverService implements Resolve<About[]>{
    constructor(private aboutService: AboutService, private dataStorageService : DataStorageService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): About[] | Observable<About[]> | Promise<About[]> {
        const abouts = this.aboutService.getAbouts()
        if (abouts.length === 0) {
            return this.dataStorageService.fetchAbout();
        }else {
            return abouts;
        }

    }
}