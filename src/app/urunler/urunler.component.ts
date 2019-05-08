import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import {Kategori} from '../models/kategori';
import {Urun} from '../models/urun';
import {stringify} from '@angular/compiler/src/util';

@Component({
  selector: 'app-urunler',
  templateUrl: './urunler.component.html',
  styleUrls: ['./urunler.component.scss']
})
export class UrunlerComponent implements OnInit {

  kategoriler: Kategori[];
  selectedLevel: Kategori;
  urunler: Urun[];
  urunDetayShow: boolean = false;
  selectedUrun: Urun;
  selectedUrunler: any[];
  selectedKategori: Kategori = {
    id: null,
    kategoriAdi: '',
    active: null,
    sira: null
};
  constructor( private apiService: ApiService) { }

  ngOnInit() {
    this.getKategori();
    this.getUrunler();
  }
  getKategori() {
    this.apiService.readKategori().subscribe((kategori: Kategori[]) => {
      this.kategoriler = kategori;
      this.selectedKategori = kategori[0];
    });
  }

  getUrunler() {
    this.apiService.readUrunler().subscribe((urun: Urun[]) => {
      this.urunler = urun;
      this.onkategori(this.selectedKategori);
    });
  }
  urunDetay(urun: Urun) {
    this.urunDetayShow = true;
    this.selectedUrun = urun;
  }
  onkategori(kat: Kategori) {
    this.selectedKategori = kat;
    this.urunDetayShow = false;
    this.selectedUrunler = this.urunler.filter(x => x.katid === kat.id);
  }

  onChange () {
    this.selectedKategori = this.selectedLevel;
    this.urunDetayShow = false;
    this.selectedUrunler = this.urunler.filter(x => x.katid === this.selectedLevel.id);
  }
}
