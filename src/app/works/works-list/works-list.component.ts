import { Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
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
  constructor(private worksService: WorksService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.works = this.worksService.getWorks()
    this.subscription = this.worksService.workChanged.subscribe((works: Work[]) => {
      this.works = works;
      console.log('This is from list - '+this.works[1].heading);
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onAddNew(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
