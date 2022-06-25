import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http"
import { Work } from "../works/Work.model";
import { tap, map } from "rxjs";
import { WorksService } from "../works/works-service";
@Injectable({
    providedIn: 'root'
})

export class DataStorageService {
    constructor(private http: HttpClient, private worksService: WorksService) { }

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
                console.log(works);
            })
        )
    }

    storeAndFetch() {
        this.storeWorks();
        this.fetchWorks();
    }
}