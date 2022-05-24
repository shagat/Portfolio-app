import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFirstSectionComponent } from './contact-first-section.component';

describe('ContactFirstSectionComponent', () => {
  let component: ContactFirstSectionComponent;
  let fixture: ComponentFixture<ContactFirstSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactFirstSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFirstSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
