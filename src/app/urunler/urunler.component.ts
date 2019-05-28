import {Component, EventEmitter, OnInit, Output, TemplateRef} from '@angular/core';
import {ApiService} from '../services/api.service';
import {Kategori} from '../models/kategori';
import {Urun} from '../models/urun';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-urunler',
  templateUrl: './urunler.component.html',
  styleUrls: ['./urunler.component.scss']
})
export class UrunlerComponent implements OnInit {
  modalRef: BsModalRef;
  fileUrl: string;
  kategoriler: any;
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
  constructor( private apiService: ApiService, private modalService: BsModalService) { }
  ngOnInit() {
    this.getKategori();
    this.getUrunler();
  }
  getKategori() {
    this.apiService.readKategori().subscribe((kategori: Kategori[]) => {
      this.kategoriler = kategori;
      this.setKatLink();
      this.selectedKategori = kategori[0];
    });
  }

  setKatLink() {
    this.kategoriler.forEach(function (kat) {
      kat.katLink = kat.kategoriAdi.replace(/\s/gi, '').toLowerCase();
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
  openModal(template: TemplateRef<any>, img: string) {
    this.modalRef = this.modalService.show(template);
    this.fileUrl = img;
  }
}
