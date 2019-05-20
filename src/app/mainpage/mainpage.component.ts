import {Component, ElementRef, OnInit,  Renderer2, ViewChild} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  @ViewChild('scrollTop') scrollElm: ElementRef;
  @ViewChild('scrollEl') scrollElment: ElementRef;
  lightStatus: boolean = true;
  constructor(private router: Router,  private renderer: Renderer2) { }

  ngOnInit() {
  }

  routeIsActive(routePath: string) {
    return this.router.url === routePath;
  }

  lightChange() {
    this.lightStatus = !this.lightStatus;
  }

    onScroll($event) {
      if ($event.srcElement.scrollTop > 200) {
          this.renderer.setStyle(this.scrollElm.nativeElement, 'visibility', 'visible');
      } else {
          this.renderer.setStyle(this.scrollElm.nativeElement, 'visibility', 'hidden');
      }
    }
    onScrollTop() {
        this.scrollElment.nativeElement.scroll(0, 0);
    }

}
