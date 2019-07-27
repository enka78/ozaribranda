import {Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Slider} from '../../models/slider';
import {ApiService} from '../../services/api.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-panel-slider',
  templateUrl: './panel-slider.component.html',
  styleUrls: ['./panel-slider.component.scss']
})
export class PanelSliderComponent implements OnInit {
  sliderForm = new FormGroup({
    id: new FormControl(null),
    sliderText1: new FormControl('', Validators.required),
    sliderText2: new FormControl('', Validators.required),
    sliderimg: new FormControl('', Validators.required),
    sliderMobil: new FormControl('', Validators.required),
    active: new FormControl(null, Validators.required),
    sira: new FormControl(null, Validators.required),
  });

  sliders: Slider[];
  selectedSlider:  Slider  = { id :  null , sliderText1: '' , sliderText2: '', sliderimg: '', sliderMobil: '', active : null, sira : null };

  constructor(private apiservice: ApiService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getSliders();
  }
  counterimg: number = 1;
  public getFileUrl(url): void {
    if (this.counterimg === 1) {
      this.sliderForm.controls['sliderimg'].setValue(url);
    } else {
      this.sliderForm.controls['sliderMobil'].setValue(url);
    }
    this.counterimg++;
  }
  getSliders() {
    this.apiservice.readSliders().subscribe((slider: Slider[]) => {
      this.sliders = slider;
    });
  }

  onSubmit() {
    if (this.selectedSlider && this.selectedSlider.id) {
      this.apiservice.updateSlider(this.sliderForm.value).subscribe((slider: Slider) => {
        this.getSliders();
        this.emptySelected();
        this.sliderForm.reset();
        this.toastr.success('Başarıyla Güncellendi');
      }, (err) => {
        this.toastr.success('Güncelleme Başarısız');
      });
    } else {
      this.apiservice.createSlider(this.sliderForm.value).subscribe(() => {
        this.getSliders();
        this.emptySelected();
        this.sliderForm.reset();
        this.toastr.success('Kayıt Başarıyla Gerçekleşti');
      }, (err) => {
        this.toastr.success('Kayıt Başarısız');
      });
    }
  }

  selected(slider: Slider) {
    this.selectedSlider = slider;
    this.sliderForm.setValue(slider);
  }
  emptySelected( ) {
    this.selectedSlider = { id :  null , sliderText1: '' , sliderText2: '', sliderimg: '', sliderMobil: '', active : null, sira : null };
  }

  delete(id) {
    this.apiservice.deleteSlider(id).subscribe((slider: Slider) => {
      this.getSliders();
      this.emptySelected();
      this.toastr.success('Kayıt Başarıyla Silindi');
    }, (err) => {
      this.toastr.success('Kayıt Silinemedi');
    });
  }

}
