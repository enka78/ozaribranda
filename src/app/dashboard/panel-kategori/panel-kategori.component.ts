import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../services/api.service';
import {Kategori} from '../../models/kategori';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-panel-kategori',
  templateUrl: './panel-kategori.component.html',
  styleUrls: ['./panel-kategori.component.scss']
})
export class PanelKategoriComponent implements OnInit {
  kategoriler: Kategori[];
  selectedKat: Kategori = {
    id: null,
    kategoriAdi: '',
    active: null,
    sira: null,
  };
  kategoriForm = new FormGroup({
    id: new FormControl(null),
    kategoriAdi: new FormControl('', Validators.required),
    active: new FormControl(null, Validators.required),
    sira: new FormControl(null, Validators.required),
  });
  constructor(private apiservice: ApiService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getKategoriler();
  }
  onSubmit() {
    if (this.selectedKat && this.selectedKat.id) {
      this.apiservice.updateKategori(this.kategoriForm.value).subscribe((kategori: Kategori) => {
        this.getKategoriler();
        this.emptySelected();
        this.kategoriForm.reset();
        this.toastr.success('Başarıyla Güncellendi');
      }, (err) => {
        this.toastr.success('Güncelleme Başarısız');
      });
    } else {
      this.apiservice.createKategori(this.kategoriForm.value).subscribe(() => {
        this.getKategoriler();
        this.emptySelected();
        this.kategoriForm.reset();
        this.toastr.success('Kayıt Başarıyla Gerçekleşti');
      }, (err) => {
        this.toastr.success('Kayıt Başarısız');
      });
    }
  }
  getKategoriler() {
    this.apiservice.readKategori().subscribe((kategori: Kategori[]) => {
      this.kategoriler = kategori;
    });
  }
  selected (kategori: Kategori) {
    this.selectedKat = kategori;
    this.kategoriForm.setValue(kategori);
  }
  emptySelected( ) {
    this.selectedKat = {
      id: null,
      kategoriAdi: '',
      active: null,
      sira: null,
    };
  }
  delete(id) {
    this.apiservice.deleteKategori(id).subscribe((kategori: Kategori) => {
      this.getKategoriler();
      this.toastr.success('Kayıt Başarıyla Silindi');
    }, (err) => {
      this.toastr.warning('Kayıt Silinemedi');
    });
  }
}
