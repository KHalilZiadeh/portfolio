import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.scss']
})
export class TitlesComponent implements OnInit {

  titles: string[] = ['here', 'goes', 'some', 'random', 'text'];
  titleIndx: number = 1;
  title!: string;
  tIntId!: any;
  cIntId!: any;

  constructor() { }

  ngOnInit(): void {
    this.spellTitle(this.titles[0]);
    this.shuffleTitle();
  }

  shuffleTitle(): void {
    clearInterval(this.tIntId);
    this.tIntId = null;
    this.tIntId = setInterval(() => {
      this.spellTitle(this.titles[(this.titleIndx++) % this.titles.length]);
    }, 3000);
  }

  spellTitle(title: string): void {
    clearInterval(this.cIntId);
    this.cIntId = null;
    let titleL: number = 1;
    this.cIntId = setInterval(() => {
      this.title = title.slice(0, titleL++);
    }, 150);
  }

}
