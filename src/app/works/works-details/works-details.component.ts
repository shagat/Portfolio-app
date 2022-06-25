import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Work } from '../Work.model';
import { WorksService } from '../works-service';

@Component({
  selector: 'app-works-details',
  templateUrl: './works-details.component.html',
  styleUrls: ['./works-details.component.css']
})
export class WorksDetailsComponent implements OnInit, OnDestroy {
  work!: Work;
  id!: number;
  subscription = new Subscription
  constructor(private worksService: WorksService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.work = this.worksService.getWork(this.id);
    })
  }

  onGoBack() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onEdit() {
    this.worksService.startedEditing.next(this.id);
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
