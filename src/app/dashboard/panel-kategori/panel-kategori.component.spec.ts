import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelKategoriComponent } from './panel-kategori.component';

describe('PanelKategoriComponent', () => {
  let component: PanelKategoriComponent;
  let fixture: ComponentFixture<PanelKategoriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelKategoriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelKategoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
