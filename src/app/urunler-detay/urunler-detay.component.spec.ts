import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrunlerDetayComponent } from './urunler-detay.component';

describe('UrunlerDetayComponent', () => {
  let component: UrunlerDetayComponent;
  let fixture: ComponentFixture<UrunlerDetayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrunlerDetayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrunlerDetayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
