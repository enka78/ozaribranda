import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

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


  constructor() { }

  ngOnInit() {
  }

}
