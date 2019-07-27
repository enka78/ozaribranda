import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbarlink',
  templateUrl: './navbarlink.component.html',
  styleUrls: ['./navbarlink.component.scss']
})
export class NavbarlinkComponent implements OnInit {
  lightStatus: boolean = true;
  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }
  lightChange() {
    this.lightStatus = !this.lightStatus;
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = this.lightStatus ? 'white' : 'black';
  }

}
