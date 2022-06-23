import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Work } from '../Work.model';
import { WorksService } from '../works-service';

@Component({
  selector: 'app-works-details',
  templateUrl: './works-details.component.html',
  styleUrls: ['./works-details.component.css']
})
export class WorksDetailsComponent implements OnInit {
  work!: Work;
  id!: number;
  constructor(private worksService: WorksService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.work = this.worksService.getWork(this.id);
      console.log(this.work)
    })
  }

  onGoBack() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

}
