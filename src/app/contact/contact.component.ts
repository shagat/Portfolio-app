import { Component, Input, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit{
    contacts = []
    ngOnInit(): void {
        this.contacts = environment.contacts;
        console.log(this.contacts);
    }
}