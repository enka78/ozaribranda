import {Component, OnInit, TemplateRef} from '@angular/core';
import {ApiService} from '../services/api.service';
import {Galeri} from '../models/galeri';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-galeri',
  templateUrl: './galeri.component.html',
  styleUrls: ['./galeri.component.scss']
})
export class GaleriComponent implements OnInit {
  modalRef: BsModalRef;
  galeri: Galeri[];
  fileUrlGal: string;
  constructor(private apiservice: ApiService, private modalService: BsModalService) { }

  ngOnInit() {
    this.apiservice.readGaleri().subscribe((galeri: Galeri[]) => {
      this.galeri = galeri;
    });
  }

  openModal(template: TemplateRef<any>, img: any) {
    this.modalRef = this.modalService.show(template);
    this.fileUrlGal = img.galeriPic;
  }
}
