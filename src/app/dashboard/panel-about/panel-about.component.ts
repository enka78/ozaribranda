import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../services/api.service';
import {About} from '../../models/about';
import { ToastrService } from 'ngx-toastr';
import {Slider} from '../../models/slider';

@Component({
  selector: 'app-panel-about',
  templateUrl: './panel-about.component.html',
  styleUrls: ['./panel-about.component.scss']
})
export class PanelAboutComponent implements OnInit {
  aboutForm = new FormGroup({
    id: new FormControl(null),
    hakimizdaText: new FormControl('', Validators.required),
    vizyonText: new FormControl('', Validators.required),
    misyonText: new FormControl('', Validators.required),
    active: new FormControl(null, Validators.required),
    sira: new FormControl(null, Validators.required),
  });

  abouts: About[] = [];
  selectedAbout:  About = {
    id: null,
    hakimizdaText: '',
    misyonText: '',
    vizyonText: '',
    active: null,
    sira: null};
  constructor(private apiservice: ApiService,  private toastr: ToastrService) { }

  ngOnInit() {
    this.getAbout();
  }
  getAbout() {
    this.apiservice.readAbout().subscribe((about: About[]) => {
      this.abouts = about;
    });
  }
  onSubmit() {
    if (this.selectedAbout && this.selectedAbout.id) {
      this.apiservice.updateAbout(this.aboutForm.value).subscribe((about: About) => {
        this.getAbout();
        this.emptySelected();
        this.aboutForm.reset();
        this.toastr.success('Başarıyla Güncellendi');
      },  (err) => {
        this.toastr.success('Güncelleme Başarısız');
      });
    } else {
      this.apiservice.createAbout(this.aboutForm.value).subscribe(() => {
        this.getAbout();
        this.emptySelected();
        this.aboutForm.reset();
        this.toastr.success('Kayıt Başarıyla Gerçekleşti');
      }, (err) => {
        this.toastr.success('Kayıt Başarısız');
      });
    }
  }
  selected(about: About) {
    this.selectedAbout = about;
    this.aboutForm.setValue(about);
  }
  emptySelected( ) {
    this.selectedAbout = {
      id: null,
      hakimizdaText: '',
      misyonText: '',
      vizyonText: '',
      active: null,
      sira: null};
  }
  delete(id) {
    this.apiservice.deleteAbout(id).subscribe((about: About) => {
      this.getAbout();
      this.emptySelected();
      this.toastr.success('Kayıt Başarıyla Silindi');
    }, (err) => {
      this.toastr.success('Kayıt Silinemedi');
    });
  }
}
