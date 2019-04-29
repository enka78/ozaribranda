import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ApiService} from '../../services/api.service';
import {Urun} from '../../models/urun';
import {Kategori} from '../../models/kategori';

@Component({
  selector: 'app-panel-urunler',
  templateUrl: './panel-urunler.component.html',
  styleUrls: ['./panel-urunler.component.scss']
})
export class PanelUrunlerComponent implements OnInit {

  urunlerForm = new FormGroup({
    katid: new FormControl(''),
    urunAdi: new FormControl(''),
    urunPic1: new FormControl(''),
    urunPic2: new FormControl(''),
    urunPic3: new FormControl(''),
    urunDetay: new FormControl(''),
    active: new FormControl(''),
    sira: new FormControl(''),
  });

  urunler: Urun[];
  kategoriler: Kategori[];
  constructor(private apiservice: ApiService) { }

  ngOnInit() {
    this.apiservice.readKategori().subscribe((kategori: Kategori[]) => {
      this.kategoriler = kategori;
    });
    this.apiservice.readUrunler().subscribe((urun: Urun[]) => {
      this.urunler = urun;
    });
  }
  onSubmit() {
    this.apiservice.createUrunler(this.urunlerForm.value).subscribe(() => {
      console.log('başarılı kayıt');
    });
  }

}
