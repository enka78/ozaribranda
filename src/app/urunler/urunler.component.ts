import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import {Kategori} from '../models/kategori';
import {Urun} from '../models/urun';

@Component({
  selector: 'app-urunler',
  templateUrl: './urunler.component.html',
  styleUrls: ['./urunler.component.scss']
})
export class UrunlerComponent implements OnInit {

  kategoriler: Kategori[];
  urunler: Urun[];
  constructor( private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.readKategori().subscribe((kategori: Kategori[]) => {
      this.kategoriler = kategori;
    });

    this.apiService.readUrunler().subscribe((urun: Urun[]) => {
      this.urunler = urun;
    });
  }
}
