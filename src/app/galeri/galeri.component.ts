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
  title = 'özarı branda mehmet balarısı';
  keywords = 'Branda, Çadır,Tente, Kamp Çadırı,1100 PVC,450 PVC TENTELİK, Yerli Akrilik ,  ' +
    'Avrupa Akrilik , File, Jüt,   Gazebo Çardak,  Katlanır Tente ,  Örümcek Çadır ,  ' +
    'Oto Brandası ,  Katlanır Masa ,  Ahşap Masa ,  Katlanır Sandalye ,  Ahşap Rejisör , ' +
    'Ebatlı Branda , Rulo Branda , Minder, Armut Minder,  Asma Germe ,  Konfeksiyon Torbası ,  ' +
    'Konfeksiyon Torbası ,   Taşıma Torbası , Kapsül, Halka,  Fermuar , Toka,  Off Road Araç Yan Tentesi';
  description = 'Branda,  Çadır ve Malzemeleri';

  constructor(private apiservice: ApiService, private modalService: BsModalService,  private titleService: Title, private meta: Meta) { }

  ngOnInit() {
    this.apiservice.readGaleri().subscribe((galeri: Galeri[]) => {
      this.galeri = galeri;
    });
    this.titleService.setTitle(this.title);
    this.meta.updateTag({name: 'description', content: this.description});
    this.meta.updateTag({name: 'keywords', content: this.keywords});
  }

  openModal(template: TemplateRef<any>, img: any) {
    this.modalRef = this.modalService.show(template);
    this.fileUrlGal = img.galeriPic;
  }
}
