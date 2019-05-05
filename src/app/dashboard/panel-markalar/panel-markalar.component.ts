import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Marka} from '../../models/marka';
import {ApiService} from '../../services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-panel-markalar',
  templateUrl: './panel-markalar.component.html',
  styleUrls: ['./panel-markalar.component.scss']
})
export class PanelMarkalarComponent implements OnInit {
  markaForm = new FormGroup({
    id: new FormControl(null),
    markaText: new FormControl('', Validators.required),
    markaPic: new FormControl('', Validators.required),
    active: new FormControl(null, Validators.required),
    sira: new FormControl(null, Validators.required),
  });

  markalar: Marka[];
  selectedMarka: Marka = {
    id: null,
    markaText: '',
    markaPic: '',
    active: null,
    sira: null};

  constructor(private apiservice: ApiService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getMarkalar();
  }

  public getFileUrl(url): void {
    this.markaForm.controls['markaPic'].setValue(url);
  }
  getMarkalar() {
    this.apiservice.readMarkalar().subscribe((marka: Marka[]) => {
      this.markalar = marka;
    });
  }
  onSubmit() {
    if (this.selectedMarka && this.selectedMarka.id) {
      this.apiservice.updateMarkalar(this.markaForm.value).subscribe((marka: Marka) => {
        this.getMarkalar();
        this.emptySelected();
        this.markaForm.reset();
        this.toastr.success('Başarıyla Güncellendi');
      }, (err) => {
        this.toastr.success('Güncelleme Başarısız');
      });
    } else {
      this.apiservice.createMarkalar(this.markaForm.value).subscribe(() => {
        this.getMarkalar();
        this.emptySelected();
        this.toastr.success('Kayıt Başarıyla Gerçekleşti');
      }, (err) => {
        this.toastr.success('Kayıt Başarısız');
      });
    }
  }
  selected (marka: Marka) {
    this.selectedMarka = marka;
    this.markaForm.setValue(marka);
  }
  emptySelected( ) {
    this.selectedMarka = { id :  null , markaText: '' , markaPic: '' , active : null, sira : null };
  }

  delete(id) {
    this.apiservice.deleteMarkalar(id).subscribe((marka: Marka) => {
      this.getMarkalar();
      this.emptySelected();
      this.toastr.success('Kayıt Başarıyla Silindi');
    }, (err) => {
      this.toastr.success('Kayıt Silinemedi');
    });
  }

}
