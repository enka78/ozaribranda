import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import {Kategori} from '../models/kategori';
import {Urun} from '../models/urun';
import {ModalService} from '../services/modal.service';

declare var $: any;

@Component({
  selector: 'app-urunler',
  templateUrl: './urunler.component.html',
  styleUrls: ['./urunler.component.scss']
})
export class UrunlerComponent implements OnInit {
  fileUrl: any;
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

  constructor( private apiService: ApiService, private modalService: ModalService) { }

  ngOnInit() {
    this.getKategori();
    this.getUrunler();
    $('#myModal').modal({
      show: false,
      backdrop: false,
    });
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

  // openModal(img): void {
  //   this.fileUrl = img;
  // }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
