import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.component.html',
  styleUrls: ['./alphabet.component.scss']
})
export class AlphabetComponent implements OnInit {
  @Output() emitLetter = new EventEmitter<string>();
  // tslint:disable-next-line: max-line-length
  lettersList = ['a', 'ą', 'b', 'c', 'ć', 'd', 'e', 'ę', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'ł', 'm', 'n', 'ń', 'o', 'ó', 'p', 'q', 'r', 's', 'ś', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'ż', 'ź'];
  clickedLettesList: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  clickedCharacterHandler(letter: string): void {
    this.clickedLettesList.push(letter);
    this.emitLetter.emit(letter);
  }

}
