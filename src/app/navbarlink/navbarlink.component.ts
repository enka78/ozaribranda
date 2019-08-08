import {Component, ElementRef, OnInit} from '@angular/core';
import {Kategori} from '../models/kategori';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-navbarlink',
  templateUrl: './navbarlink.component.html',
  styleUrls: ['./navbarlink.component.scss']
})
export class NavbarlinkComponent implements OnInit {
  lightStatus: boolean = true;
  urunlerLink: string;
  constructor(private elementRef: ElementRef, private apiService: ApiService) { }

  ngOnInit() {
    this.getKategori();
  }
  getKategori() {
    this.apiService.readKategori().subscribe((kategori: Kategori[]) => {
      this.urunlerLink = kategori[0].kategoriAdi.replace(/\s/gi, '').toLowerCase();
    });
  }

  lightChange() {
    this.lightStatus = !this.lightStatus;
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = this.lightStatus ? 'white' : 'black';
  }

}
