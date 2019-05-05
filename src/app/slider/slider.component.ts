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
  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.readSliders().subscribe((sliders: Slider[]) => {
      console.log(sliders);
      this.sliders = sliders;
    });
  }

  routeIsActive(routePath: string) {
    return this.router.url === routePath;
  }

}
