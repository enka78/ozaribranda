import {Component, OnInit} from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta) { }

  title = 'Özarı Branda Anasayfa';
  keywords = 'Branda, Çadır,  Tente, Kamp Çadırı,  PVC,  Tente, Akrilik, Jüt,  Gazebo Çardak';
  description = 'Özarı Branda olarak pvc, pilsa, polyester ve pamuk kumaş çeşitlerimiz ile hizmetinizdeyiz.';
  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({name: 'description', content: this.description});
    this.meta.updateTag({name: 'keywords', content: this.keywords});
  }
}
