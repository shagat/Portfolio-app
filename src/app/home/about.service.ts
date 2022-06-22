import { Injectable } from "@angular/core";
import { About } from "./About.model";
@Injectable({ providedIn: 'root' })
export class AboutService {
    private imgSrc = { imgName: 'Jocelyn Morales', imgLink: 'https://images.unsplash.com/photo-1627236418876-ef8689d94241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' };
    private about: About[] = [
        new About('about me...', 'I am a Computer Science graduate from Assam Don Bosco University. I am looking for a full-time job in the IT sector. I have been working on my own projects for the last 1 years on web developments. Some of the web development frameworks that I have worked with - Python Django, Angular and Express. I have also developed a keen intrest in UI/UX design using html and css.'),
        new About('and more', 'I am willing to join and assimilate in a team and provide a fresh take and fresh approah to every project. I am open to challenges and constructive feedback. I am open-minded and ready to learn new things...')]

    getAbouts() {
        return this.about.slice()
    }
    getImgSrc() {
        return this.imgSrc;
    }
}