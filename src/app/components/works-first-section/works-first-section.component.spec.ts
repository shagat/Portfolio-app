import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksFirstSectionComponent } from './works-first-section.component';

describe('WorksFirstSectionComponent', () => {
  let component: WorksFirstSectionComponent;
  let fixture: ComponentFixture<WorksFirstSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorksFirstSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksFirstSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
