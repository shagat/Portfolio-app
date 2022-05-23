import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksSecondSectionComponent } from './works-second-section.component';

describe('WorksSecondSectionComponent', () => {
  let component: WorksSecondSectionComponent;
  let fixture: ComponentFixture<WorksSecondSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorksSecondSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksSecondSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
