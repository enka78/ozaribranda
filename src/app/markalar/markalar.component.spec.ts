import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkalarComponent } from './markalar.component';

describe('MarkalarComponent', () => {
  let component: MarkalarComponent;
  let fixture: ComponentFixture<MarkalarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkalarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkalarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
