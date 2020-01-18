import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelnessNSpaComponent } from './welness-n-spa.component';

describe('WelnessNSpaComponent', () => {
  let component: WelnessNSpaComponent;
  let fixture: ComponentFixture<WelnessNSpaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelnessNSpaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelnessNSpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
