import { Injectable} from "@angular/core";
import { Subject } from "rxjs";
import { Work } from "./Work.model";

@Injectable({
    providedIn: ('root')
})
export class WorksService {
    workChanged = new Subject<Work[]>();
    // startedEditing = new Subject<number>();
    private works: Work[] = []

constructor(){}

    getWorks() {
        return this.works.slice();
    }

    getWork(index: number) {
        return this.works[index];
    }

    setWorks(works: Work[]){
        this.works = works;
        this.workChanged.next(this.works.slice());
    }

    addWork(work: Work) {
        this.works.push(work);
        this.workChanged.next(this.works.slice());
    }

    updateWork(index: number, newWork: Work) {
        this.works[index] = newWork;
        console.log('This is from service- '+newWork.heading)
        this.workChanged.next(this.works.slice());
    }

    deleteWork(index: number) {
        this.works.splice(index, 1);
        this.workChanged.next(this.works.slice());
    }
}