import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-drawn-word',
  templateUrl: './drawn-word.component.html',
  styleUrls: ['./drawn-word.component.scss']
})
export class DrawnWordComponent implements OnInit, OnChanges {
  @Input() drawnWord: any;
  @Input() matchLetters: any[];
  letters: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.drawnWord){
      this.letters = [...this.drawnWord];
    }
  }

}
