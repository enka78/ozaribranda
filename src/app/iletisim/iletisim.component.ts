import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iletisim',
  templateUrl: './iletisim.component.html',
  styleUrls: ['./iletisim.component.scss']
})
export class IletisimComponent implements OnInit {

  constructor() { }
  location = {lat: 41.0173149, lng: 28.9581623};

  ngOnInit() {

  }

}
