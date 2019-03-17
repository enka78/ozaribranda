import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashMainpageComponent } from './dash-mainpage.component';

describe('DashMainpageComponent', () => {
  let component: DashMainpageComponent;
  let fixture: ComponentFixture<DashMainpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashMainpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashMainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
