import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appCursor]'
})
export class CursorDirective implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = '#eee';
    this.elementRef.nativeElement.style.color = 'transparent';
    this.elementRef.nativeElement.style.width = '0.2rem';
    this.elementRef.nativeElement.style.height = '2.5rem';
  }
}
