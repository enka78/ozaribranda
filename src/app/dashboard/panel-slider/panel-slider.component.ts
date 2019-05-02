import {Component, OnInit, ViewChild, } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Slider} from '../../models/slider';
import {ApiService} from '../../services/api.service';
import {FileUploadComponent} from '../../file-upload/file-upload.component';
import {takeUntil} from 'rxjs/operators';



@Component({
  selector: 'app-panel-slider',
  templateUrl: './panel-slider.component.html',
  styleUrls: ['./panel-slider.component.scss']
})
export class PanelSliderComponent implements OnInit {
 @ViewChild(FileUploadComponent) uploadData: FileUploadComponent;
  sliderForm = new FormGroup({
    id: new FormControl(''),
    sliderText1: new FormControl(''),
    sliderText2: new FormControl(''),
    sliderimg: new FormControl(''),
    active: new FormControl(''),
    sira: new FormControl(''),
  });

  sliders: Slider[];
  selectedSlider:  Slider  = { id :  null , sliderText1: '' , sliderText2: '', sliderimg: '' , active : null, sira : null };
  constructor(private apiservice: ApiService) { }

  ngOnInit() {
    this.getSliders();
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
        console.log('slider updated');
      });
    } else {
      this.sliderForm.value.sliderimg = this.uploadData.uploadResponse.url;
      this.apiservice.createSlider(this.sliderForm.value).subscribe(() => {
        this.getSliders();
        this.emptySelected();
        console.log('başarılı kayıt');
      });
    }
  }

  selected(slider: Slider) {
    this.selectedSlider = slider;
    this.sliderForm.setValue(slider);
  }
  emptySelected( ) {
    this.selectedSlider = { id :  null , sliderText1: '' , sliderText2: '', sliderimg: '' , active : null, sira : null };
  }

  delete(id) {
    this.apiservice.deleteSlider(id).subscribe((slider: Slider) => {
      this.getSliders();
      this.emptySelected();
      console.log('slider deleted');
    });
  }

}
