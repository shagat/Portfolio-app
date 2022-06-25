import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { DataStorageService } from "../shared/data_storage.service";
import { Work } from "./Work.model";
import { WorksService } from "./works-service";
@Injectable({
    providedIn: 'root'
})
export class WorksResolverService implements Resolve<Work[]>{
    constructor(private worksService: WorksService, private dataStorageService: DataStorageService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Work[] | Observable<Work[]> | Promise<Work[]> {
        const works = this.worksService.getWorks()
        if (works.length === 0) {
            console.log('This is the work of a Resolver')
            return this.dataStorageService.fetchWorks();
        } else {
            console.log('This is the work of a Resolver')
            return works;
        }
    }
}