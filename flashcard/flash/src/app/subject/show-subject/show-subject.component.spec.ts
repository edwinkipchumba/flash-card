import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSubjectComponent } from './show-subject.component';

describe('ShowSubjectComponent', () => {
  let component: ShowSubjectComponent;
  let fixture: ComponentFixture<ShowSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
