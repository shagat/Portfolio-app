import { Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Work } from '../Work.model';
import { WorksService } from '../works-service';

@Component({
  selector: 'app-works-list',
  templateUrl: './works-list.component.html',
  styleUrls: ['./works-list.component.css']
})
export class WorksListComponent implements OnInit, OnDestroy {
  works: Work[] = [];
  subscription = new Subscription;
  private userSub: Subscription;
  isAuth = false;

  constructor(private worksService: WorksService, private route: ActivatedRoute, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.works = this.worksService.getWorks()
    this.subscription = this.worksService.workChanged.subscribe((works: Work[]) => {
      this.works = works;
      console.log('This is from list - '+this.works[1].heading);
    })
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuth = !!user;
    })
  }
  
  onLogout(){
    this.authService.logout();
  }

  onAddNew(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.userSub.unsubscribe();
  }
}
