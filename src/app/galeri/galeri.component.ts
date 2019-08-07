import {Component, OnInit, TemplateRef} from '@angular/core';
import {ApiService} from '../services/api.service';
import {Galeri} from '../models/galeri';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-galeri',
  templateUrl: './galeri.component.html',
  styleUrls: ['./galeri.component.scss']
})
export class GaleriComponent implements OnInit {
  modalRef: BsModalRef;
  galeri: Galeri[];
  fileUrlGal: string;
  title = 'Özarı Branda Galeri';
  keywords = 'Branda, Çadır,  Tente, Kamp Çadırı,  PVC,  Tente, Akrilik, Jüt,  Gazebo Çardak';
  description = 'Özarı Branda olarak pvc, pilsa, polyester ve pamuk kumaş çeşitlerimiz ile hizmetinizdeyiz';

  constructor(private apiservice: ApiService, private modalService: BsModalService,  private titleService: Title, private meta: Meta) { }

  ngOnInit() {
    this.apiservice.readGaleri().subscribe((galeri: Galeri[]) => {
      this.galeri = galeri;
    });
    this.titleService.setTitle(this.title);
    this.meta.updateTag({name: 'description', content: this.description});
    this.meta.updateTag({name: 'keywords', content: this.keywords});
    this.meta.updateTag({name: 'title', content: this.title});
  }

  openModal(template: TemplateRef<any>, img: any) {
    this.modalRef = this.modalService.show(template);
    this.fileUrlGal = img.galeriPic;
  }
}
