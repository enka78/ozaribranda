import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbarlink',
  templateUrl: './navbarlink.component.html',
  styleUrls: ['./navbarlink.component.scss']
})
export class NavbarlinkComponent implements OnInit {
  lightStatus: boolean = true;
  constructor() { }

  ngOnInit() {
  }
  lightChange() {
    this.lightStatus = !this.lightStatus;
  }

}
