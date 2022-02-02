import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-drawn-word',
  templateUrl: './drawn-word.component.html',
  styleUrls: ['./drawn-word.component.scss']
})
export class DrawnWordComponent implements OnInit {
  @Input() drawnWord: any;
  @Input() matchLetters: any[];
  letters: any;

  constructor() { }

  ngOnInit(): void {
    this.letters = [...this.drawnWord];
  }

}
