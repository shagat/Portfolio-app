import { Injectable, OnInit } from "@angular/core";
import { About } from "./About.model";

@Injectable({
        providedIn: 'root'
})
export class AboutService {
        abouts: About[] = []
        getAbouts() {
                return this.abouts.slice();
        }

        setAbouts(abouts: About[]) {
                this.abouts = abouts;
        }

}