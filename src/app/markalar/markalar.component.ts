import { Component, OnInit } from '@angular/core';
import {Marka} from '../models/marka';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-markalar',
  templateUrl: './markalar.component.html',
  styleUrls: ['./markalar.component.scss']
})
export class MarkalarComponent implements OnInit {

  markalar: Marka[];
  constructor(private apiservice: ApiService) { }

  ngOnInit() {
    this.apiservice.readMarkalar().subscribe((marka: Marka[]) => {
      this.markalar = marka;
    });
  }

}
