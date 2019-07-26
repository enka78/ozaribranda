import {Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-navbarlink',
  templateUrl: './navbarlink.component.html',
  styleUrls: ['./navbarlink.component.scss']
})
export class NavbarlinkComponent {
  lightStatus: boolean = true;
  constructor(private elementRef: ElementRef) { }


  lightChange() {
    this.lightStatus = !this.lightStatus;
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = this.lightStatus ? 'white' : 'black';
  }

}
