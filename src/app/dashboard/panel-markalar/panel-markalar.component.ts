import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ApiService} from '../../services/api.service';
import {Marka} from '../../models/marka';

@Component({
  selector: 'app-panel-markalar',
  templateUrl: './panel-markalar.component.html',
  styleUrls: ['./panel-markalar.component.scss']
})
export class PanelMarkalarComponent implements OnInit {
  markaForm = new FormGroup({
    markaText: new FormControl(''),
    markaPic: new FormControl(''),
    active: new FormControl(''),
    sira: new FormControl(''),
  });

  markalar: Marka[];
  constructor(private apiservice: ApiService) { }

  ngOnInit() {
    this.apiservice.readMarkalar().subscribe((marka: Marka[]) => {
      this.markalar = marka;
    });
  }
  onSubmit() {
    this.apiservice.createMarkalar(this.markaForm.value).subscribe(() => {
      console.log('başarılı kayıt');
    });
  }

}
