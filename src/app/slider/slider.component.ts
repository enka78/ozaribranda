import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ApiService } from '../services/api.service';
import {Slider} from '../models/slider';
import {ApplicationStateService} from '../services/application-state.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  sliders: Slider[];
  isMobile: boolean = false;
  constructor(private router: Router, private apiService: ApiService, private isMobileService: ApplicationStateService) { }

  ngOnInit() {
    this.apiService.readSliders().subscribe((sliders: Slider[]) => {
      this.sliders = sliders;
    });
    this.isMobile = this.isMobileService.getIsMobileResolution();
  }

  routeIsActive(routePath: string) {
    return this.router.url === routePath;
  }

}
