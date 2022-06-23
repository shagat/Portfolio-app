import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Work } from '../Work.model';
import { WorksService } from '../works-service';

@Component({
  selector: 'app-works-list',
  templateUrl: './works-list.component.html',
  styleUrls: ['./works-list.component.css']
})
export class WorksListComponent implements OnInit, OnDestroy {
works: Work[]=[];
subscription = new Subscription;
  constructor(private worksService: WorksService) { }

  ngOnInit(): void {
    this.works = this.worksService.getWorks()
    this.subscription = this.worksService.workChanged.subscribe((works : Work[]) => {
      this.works = works;
    })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
