import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, Renderer2, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.scss']
})
export class TitlesComponent implements AfterViewInit {

  @ViewChild('cursor') cursor!: ElementRef;

  titles: string[] = ['here', 'goes', 'some', 'random', 'text'];
  titleIndx: number = 1;
  title!: string;
  tIntId!: any;
  cIntId!: any;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.spellTitle(this.titles[0]);
    this.shuffleTitle();
  };

  shuffleTitle(): void {
    clearInterval(this.tIntId);
    this.tIntId = null;
    this.tIntId = setInterval(() => {
      this.spellTitle(this.titles[(this.titleIndx++) % this.titles.length]);
    }, 5000);
  };

  spellTitle(title: string): void {
    clearInterval(this.cIntId);
    this.renderer.removeClass(this.cursor.nativeElement, 'blink');
    this.cIntId = null; let titleL: number = 0;
    this.cIntId = setInterval(() => {
      this.title = title.slice(0, titleL);
      if (titleL == title.length) {
        this.renderer.addClass(this.cursor.nativeElement, 'blink');
      }
      titleL++;
    }, 150);
  };

}
