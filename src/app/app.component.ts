import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('plus', { static: false }) plus!: ElementRef;
  title = 'portfolio';

  constructor(private renderer: Renderer2) { }
  rotate() {
    this.plus.nativeElement.classList.contains('rotate') ?
      this.renderer.removeClass(this.plus.nativeElement, 'rotate') :
      this.renderer.addClass(this.plus.nativeElement, 'rotate');
  }
}
