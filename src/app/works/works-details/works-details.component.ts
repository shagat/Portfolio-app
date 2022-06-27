import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Work } from '../Work.model';
import { WorksService } from '../works-service';

@Component({
  selector: 'app-works-details',
  templateUrl: './works-details.component.html',
  styleUrls: ['./works-details.component.css']
})
export class WorksDetailsComponent implements OnInit, OnDestroy {
  private userSub: Subscription;
  subscription = new Subscription;

  isAuth: boolean = false;
  work!: Work;
  id!: number;

  constructor(private worksService: WorksService, private route: ActivatedRoute, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.user.subscribe(user => {
      this.isAuth = !!user;
    })
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.work = this.worksService.getWork(this.id);
    })
  }

  onGoBack() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onEdit() {
    // this.worksService.startedEditing.next(this.id);
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  ngOnDestroy(): void {
    // this.userSub.unsubscribe();
  }
}
