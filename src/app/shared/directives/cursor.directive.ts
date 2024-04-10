import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appCursor]'
})
export class CursorDirective implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'red';
    this.elementRef.nativeElement.style.width = 'fit-content';
    this.elementRef.nativeElement.style.hieght = '1.5rem';
  }
}
