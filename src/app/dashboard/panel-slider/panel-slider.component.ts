import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Slider} from '../../models/slider';
import {ApiService} from '../../services/api.service';


@Component({
  selector: 'app-panel-slider',
  templateUrl: './panel-slider.component.html',
  styleUrls: ['./panel-slider.component.scss']
})
export class PanelSliderComponent implements OnInit {
  sliderForm = new FormGroup({
    sliderText1: new FormControl(''),
    sliderText2: new FormControl(''),
    sliderPic: new FormControl(''),
    sliderActive: new FormControl(''),
    sira: new FormControl(''),
  });

  sliders: Slider[];
  constructor(private apiservice: ApiService) { }

  ngOnInit() {
    this.apiservice.readSliders().subscribe((sliders: Slider[]) => {
      this.sliders = sliders;
    });
  }
  onSubmit() {
    this.apiservice.createSlider(this.sliderForm.value).subscribe(() => {
      console.log('başarılı kayıt');
    });
  }

}
