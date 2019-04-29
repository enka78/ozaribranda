import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import {Galeri} from '../models/galeri';

@Component({
  selector: 'app-galeri',
  templateUrl: './galeri.component.html',
  styleUrls: ['./galeri.component.scss']
})
export class GaleriComponent implements OnInit {

  galeri: Galeri[];
  constructor(private apiservice: ApiService) { }

  ngOnInit() {
    this.apiservice.readGaleri().subscribe((galeri: Galeri[]) => {
      this.galeri = galeri;
    });
  }
}
