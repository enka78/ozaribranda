import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import {About} from '../models/about';

@Component({
  selector: 'app-hakkimizda',
  templateUrl: './hakkimizda.component.html',
  styleUrls: ['./hakkimizda.component.scss']
})
export class HakkimizdaComponent implements OnInit {

  hakimizdaList: About[] = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.readAbout().subscribe((hakimizda: About[]) => {
      this.hakimizdaList = hakimizda;
    });
  }
}
