import { Component, Input, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit{
    contacts = []
    mailLink = '';
    gitLink = '';
    linkdLink = '';

    ngOnInit(): void {
        this.contacts = environment.contacts;
        this.mailLink = this.contacts[0];
        this.gitLink = this.contacts[1];
        this.linkdLink = this.contacts[2];
    }
}