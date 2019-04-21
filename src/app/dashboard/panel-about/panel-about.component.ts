import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-panel-about',
  templateUrl: './panel-about.component.html',
  styleUrls: ['./panel-about.component.scss']
})
export class PanelAboutComponent implements OnInit {
  aboutForm = new FormGroup({
    hakimizda: new FormControl(''),
    vizyonumuz: new FormControl(''),
    misyonumuz: new FormControl(''),
    aktif: new FormControl(''),
    sira: new FormControl(''),
  });

  constructor(private apiservice: ApiService) { }

  ngOnInit() {
  }
  onSubmit() {
    this.apiservice.createAbout(this.aboutForm.value).subscribe(() => {
      console.log('başarılı kayıt');
    });
  }
}
