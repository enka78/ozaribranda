import {Component, ElementRef, Renderer2, ViewChild, HostListener} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('scrollTop') scrollElm: ElementRef;
  @HostListener('window:scroll', []) // for window scroll events

  onScroll() {
    if (window.pageYOffset > 200) {
      this.renderer.setStyle(this.scrollElm.nativeElement, 'visibility', 'visible');
    } else {
      this.renderer.setStyle(this.scrollElm.nativeElement, 'visibility', 'hidden');
    }
  }
  constructor(public router: Router, private renderer: Renderer2) {}
  onScrollTop() {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  }
}
