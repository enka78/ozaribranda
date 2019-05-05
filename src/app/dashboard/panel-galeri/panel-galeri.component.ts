import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../services/api.service';
import {Galeri} from '../../models/galeri';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-panel-galeri',
  templateUrl: './panel-galeri.component.html',
  styleUrls: ['./panel-galeri.component.scss']
})
export class PanelGaleriComponent implements OnInit {

  galeriForm = new FormGroup({
    id: new FormControl(null),
    galeriText: new FormControl('', Validators.required),
    galeriPic: new FormControl('', Validators.required),
    active: new FormControl(null, Validators.required),
    sira: new FormControl(null, Validators.required),
  });

  galeri: Galeri[];
  selectedGaleri: Galeri = {
    id: null,
    galeriText: '',
    galeriPic: '',
    active: null,
    sira: null};
  constructor(private apiservice: ApiService,  private toastr: ToastrService) { }

  ngOnInit() {
    this.getGaleri();
  }
  public getFileUrl(url): void {
    this.galeriForm.controls['galeriPic'].setValue(url);
  }
  getGaleri() {
    this.apiservice.readGaleri().subscribe((galeri: Galeri[]) => {
      this.galeri = galeri;
    });
  }
  onSubmit() {
    if (this.selectedGaleri && this.selectedGaleri.id) {
      this.apiservice.updateGaleri(this.galeriForm.value).subscribe((galeri: Galeri) => {
        this.getGaleri();
        this.emptySelected();
        this.galeriForm.reset();
        this.toastr.success('Başarıyla Güncellendi');
      }, (err) => {
        this.toastr.warning('Güncelleme Başarısız');
      });
    } else {
      this.apiservice.createGaleri(this.galeriForm.value).subscribe(() => {
        this.getGaleri();
        this.emptySelected();
        this.toastr.success('Kayıt Başarıyla Gerçekleşti');
      }, (err) => {
        this.toastr.warning('Kayıt Başarısız');
      });
    }
  }

  selected (galeri: Galeri) {
    this.selectedGaleri = galeri;
    this.galeriForm.setValue(galeri);
  }
  emptySelected( ) {
    this.selectedGaleri = {
      id: null,
      galeriText: '',
      galeriPic: '',
      active: null,
      sira: null};
  }

  delete(id) {
    this.apiservice.deleteGaleri(id).subscribe((galeri: Galeri) => {
      this.getGaleri();
      this.emptySelected();
      this.toastr.success('Kayıt Başarıyla Silindi');
    }, (err) => {
      this.toastr.warning('Kayıt Silinemedi');
    });
  }
}
