import { Component, OnInit } from '@angular/core';
import {Marka} from '../models/marka';
import {ApiService} from '../services/api.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-markalar',
  templateUrl: './markalar.component.html',
  styleUrls: ['./markalar.component.scss']
})
export class MarkalarComponent implements OnInit {

  markalar: Marka[];
  title = 'Özarı Branda Markalar';
  keywords = 'Branda, Çadır,  Tente, Kamp Çadırı,  PVC,  Tente, Akrilik, Jüt,  Gazebo Çardak';
  description = 'Özarı Branda olarak pvc, pilsa, polyester ve pamuk kumaş çeşitlerimiz ile hizmetinizdeyiz.';
  constructor(private apiservice: ApiService, private titleService: Title, private meta: Meta) { }

  ngOnInit() {
    this.apiservice.readMarkalar().subscribe((marka: Marka[]) => {
      this.markalar = marka;
    });
    this.titleService.setTitle(this.title);
    this.meta.updateTag({name: 'description', content: this.description});
    this.meta.updateTag({name: 'keywords', content: this.keywords});
    this.meta.updateTag({name: 'title', content: this.title});
  }

}
