import { Component, OnInit } from '@angular/core';
import { Work } from '../Work.model';
import { WorksService } from '../works-service';

@Component({
  selector: 'app-works-list',
  templateUrl: './works-list.component.html',
  styleUrls: ['./works-list.component.css']
})
export class WorksListComponent implements OnInit {
works: Work[]=[];
index!: number;
  constructor(private worksService: WorksService) { }

  ngOnInit(): void {
    this.works = this.worksService.getWorks()
  }
}
