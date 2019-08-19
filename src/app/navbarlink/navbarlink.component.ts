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
      this.urunlerLink = kategori[0].kategoriAdi.replace(/\s/gi, '-').replace(/ş/gi, 's').replace(/ç/gi, 'c').replace(/ü/gi, 'u').replace(/ı/gi, 'i').replace(/ğ/gi, 'g').replace(/ö/gi, 'o').toLowerCase();
    });
  }

  lightChange() {
    this.lightStatus = !this.lightStatus;
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = this.lightStatus ? 'white' : 'black';
  }

}
