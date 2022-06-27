import { Component, Input, OnInit } from "@angular/core";
import * as aboutService from '../home/about.service'

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit{
    contacts = []
    ngOnInit(): void {
        this.contacts = aboutService.contacts;
        console.log(this.contacts);
    }
}