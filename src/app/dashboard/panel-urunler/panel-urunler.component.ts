import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../services/api.service';
import {Urun} from '../../models/urun';
import {Kategori} from '../../models/kategori';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-panel-urunler',
  templateUrl: './panel-urunler.component.html',
  styleUrls: ['./panel-urunler.component.scss']
})
export class PanelUrunlerComponent implements OnInit {

  urunlerForm = new FormGroup({
    id: new FormControl(null),
    katid: new FormControl(null, Validators.required),
    urunAdi: new FormControl('', Validators.required),
    urunPic1: new FormControl('', Validators.required),
    urunPic2: new FormControl(''),
    urunPic3: new FormControl(''),
    urunDetay: new FormControl('', Validators.required),
    active: new FormControl(null, Validators.required),
    sira: new FormControl(null, Validators.required),
  });

  urunler: Urun[];
  kategoriler: Kategori[];
  selectedUrun: Urun = {
    id: null,
    katid: null,
    urunAdi: '',
    urunPic1: '',
    urunPic2: '',
    urunPic3: '',
    urunDetay: '',
    active: null,
    sira: null};
  constructor(private apiservice: ApiService,  private toastr: ToastrService) { }

  ngOnInit() {
    this.getUrunler();
  }
  counterimg: number = 1;
  public getFileUrl(url): void {
    if (this.counterimg === 4) {
      return;
    }
    this.urunlerForm.controls['urunPic' + this.counterimg ].setValue(url);
    this.counterimg ++;
  }
  onSubmit() {
    if (this.selectedUrun && this.selectedUrun.id) {
      this.apiservice.updateUrunler(this.urunlerForm.value).subscribe((urun: Urun) => {
        this.getUrunler();
        this.emptySelected();
        this.urunlerForm.reset();
        this.toastr.success('Başarıyla Güncellendi');
      }, (err) => {
        this.toastr.warning('Güncelleme Başarısız');
      });
    } else {
      this.apiservice.createUrunler(this.urunlerForm.value).subscribe(() => {
        this.getUrunler();
        this.emptySelected();
        this.urunlerForm.reset();
        this.toastr.success('Kayıt Başarıyla Gerçekleşti');
      }, (err) => {
        this.toastr.warning('Kayıt Başarısız');
      });
    }
  }
  getUrunler() {
    this.apiservice.readKategori().subscribe((kategori: Kategori[]) => {
      this.kategoriler = kategori;
    });
    this.apiservice.readUrunler().subscribe((urun: Urun[]) => {
      this.urunler = urun;
    });
  }
  selected (urun: Urun) {
    this.selectedUrun = urun;
    this.urunlerForm.setValue(urun);
  }
  emptySelected( ) {
    this.selectedUrun = {
      id: null,
      katid: null,
      urunAdi: '',
      urunPic1: '',
      urunPic2: '',
      urunPic3: '',
      urunDetay: '',
      active: null,
      sira: null};
  }

  delete(id) {
    this.apiservice.deleteUrunler(id).subscribe((urun: Urun) => {
      this.getUrunler();
      this.emptySelected();
      this.toastr.success('Kayıt Başarıyla Silindi');
    }, (err) => {
      this.toastr.warning('Kayıt Silinemedi');
    });
  }

}
