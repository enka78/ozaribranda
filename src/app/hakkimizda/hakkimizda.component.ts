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
  title='özarı branda mehmet balarısı';
  keywords = 'Branda, Çadır,Tente, Kamp Çadırı,1100 PVC,450 PVC TENTELİK, Yerli Akrilik ,  ' +
    'Avrupa Akrilik , File, Jüt,   Gazebo Çardak,  Katlanır Tente ,  Örümcek Çadır ,  ' +
    'Oto Brandası ,  Katlanır Masa ,  Ahşap Masa ,  Katlanır Sandalye ,  Ahşap Rejisör , ' +
    'Ebatlı Branda , Rulo Branda , Minder, Armut Minder,  Asma Germe ,  Konfeksiyon Torbası ,  ' +
    'Konfeksiyon Torbası ,   Taşıma Torbası , Kapsül, Halka,  Fermuar , Toka,  Off Road Araç Yan Tentesi';
  description = 'Branda,  Çadır ve Malzemeleri';
  ngOnInit() {
    this.apiService.readAbout().subscribe((hakimizda: About[]) => {
      this.hakimizdaList = hakimizda;
    });
    this.titleService.setTitle(this.title);
    this.meta.updateTag({name: 'description', content: this.description});
    this.meta.updateTag({name: 'keywords', content: this.keywords});
  }
}
