import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ApiService } from '../services/api.service';
import {Slider} from '../models/slider';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  sliders: Slider[];
  // selectedPolicy:  Slider  = { id :  null , number:null, amount:  null};
  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.readSliders().subscribe((sliders: Slider[]) => {
      this.sliders = sliders;
      console.log(this.sliders);
    });
  }

  routeIsActive(routePath: string) {
    return this.router.url === routePath;
  }

}
