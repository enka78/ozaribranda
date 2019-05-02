import { Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Slider} from '../../models/slider';
import {ApiService} from '../../services/api.service';
import {FileUploadComponent} from '../../file-upload/file-upload.component';



@Component({
  selector: 'app-panel-slider',
  templateUrl: './panel-slider.component.html',
  styleUrls: ['./panel-slider.component.scss']
})
export class PanelSliderComponent implements OnInit {
 @ViewChild(FileUploadComponent) uploadData: FileUploadComponent;

  sliderForm = new FormGroup({
    sliderText1: new FormControl(''),
    sliderText2: new FormControl(''),
    sliderimg: new FormControl(''),
    active: new FormControl(''),
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
    this.sliderForm.value.sliderimg = this.uploadData.uploadResponse.url;
    this.apiservice.createSlider(this.sliderForm.value).subscribe(() => {
        console.log('başarılı kayıt');
        console.log(this.sliderForm.value);
    });
  }

}
