import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResortNActivityComponent } from './resort-n-activity.component';

describe('ResortNActivityComponent', () => {
  let component: ResortNActivityComponent;
  let fixture: ComponentFixture<ResortNActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResortNActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResortNActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
