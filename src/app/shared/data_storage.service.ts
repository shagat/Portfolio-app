import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http"
import { Work } from "../works/Work.model";
import { tap, map } from "rxjs";
import { WorksService } from "../works/works-service";
import { About } from "../home/About.model";
import { AboutService } from "../home/about.service";
@Injectable({
    providedIn: 'root'
})

export class DataStorageService {
    constructor(private http: HttpClient, private worksService: WorksService, private aboutService: AboutService) { }

    storeWorks() {
        const works = this.worksService.getWorks();
        this.http.put('https://my-protfolio-fb050-default-rtdb.asia-southeast1.firebasedatabase.app/works.json',
            works)
            .subscribe(res => {
                console.log(res);
            })
    }

    fetchWorks() {
        return this.http.get<Work[]>(
            'https://my-protfolio-fb050-default-rtdb.asia-southeast1.firebasedatabase.app/works.json'
        ).pipe(
             tap(works => {
                this.worksService.setWorks(works);
            })
        )
    }

    storeAbouts() {
        const abouts = this.aboutService.getAbouts();
        if (abouts.length === 0)
        this.http.put('https://my-protfolio-fb050-default-rtdb.asia-southeast1.firebasedatabase.app/abouts.json',
            abouts)
            .subscribe(res => {
                console.log(res);
            })
    }

    fetchAbout() {
        return this.http.get<About[]>(
            'https://my-protfolio-fb050-default-rtdb.asia-southeast1.firebasedatabase.app/abouts.json'
        ).pipe(
             tap(abouts => {
                this.aboutService.setAbouts(abouts);
            })
        )
    }
}