import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import {About} from '../models/about';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-hakkimizda',
  templateUrl: './hakkimizda.component.html',
  styleUrls: ['./hakkimizda.component.scss']
})
export class HakkimizdaComponent implements OnInit {

  hakimizdaList: About[] = [];
  constructor(private apiService: ApiService, private titleService: Title, private meta: Meta) { }
  title = 'Özarı Branda Hakkımızda';
  keywords = 'Branda, Çadır,  Tente, Kamp Çadırı,  PVC,  Tente, Akrilik, Jüt,  Gazebo Çardak';
  description = 'Özarı Branda olarak pvc, pilsa, polyester ve pamuk kumaş çeşitlerimiz ile hizmetinizdeyiz';
  ngOnInit() {
    this.apiService.readAbout().subscribe((hakimizda: About[]) => {
      this.hakimizdaList = hakimizda;
    });
    this.titleService.setTitle(this.title);
    this.meta.updateTag({name: 'description', content: this.description});
    this.meta.updateTag({name: 'keywords', content: this.keywords});
    this.meta.updateTag({name: 'title', content: this.title});
  }
}
