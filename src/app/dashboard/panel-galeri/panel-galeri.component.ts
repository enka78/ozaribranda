import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ApiService} from '../../services/api.service';
import {Galeri} from '../../models/galeri';

@Component({
  selector: 'app-panel-galeri',
  templateUrl: './panel-galeri.component.html',
  styleUrls: ['./panel-galeri.component.scss']
})
export class PanelGaleriComponent implements OnInit {

  galeriForm = new FormGroup({
    galeriPic: new FormControl(''),
    active: new FormControl(''),
    sira: new FormControl(''),
  });

  galeri: Galeri[];
  constructor(private apiservice: ApiService) { }

  ngOnInit() {
    this.apiservice.readGaleri().subscribe((galeri: Galeri[]) => {
      this.galeri = galeri;
    });
  }
  onSubmit() {
    this.apiservice.createGaleri(this.galeriForm.value).subscribe(() => {
      console.log('başarılı kayıt');
    });
  }

}
