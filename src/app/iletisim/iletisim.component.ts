import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iletisim',
  templateUrl: './iletisim.component.html',
  styleUrls: ['./iletisim.component.scss']
})
export class IletisimComponent implements OnInit {

  constructor() { }
  location = {lat:41.000370, lng:28.862070};

  ngOnInit() {

  }

  // initMap(){
  //   var location = {lat:41.000370, lng:28.862070};
  //   var map = new google.maps.Map(this,{
  //     zoom: 4,
  //     center: location
  //   });
  // }

}
