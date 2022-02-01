import { Component, OnInit } from '@angular/core';
import { LettersService } from './services/letters.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'handmanGame';
  author = 'Krzysztof Siek';
  drawnWord: string | undefined;

  constructor(private letterService: LettersService) {}

  ngOnInit(): void {
      this.drawnWord = 'aaa';
  }

  getClickedLetter(letter: string): void {
    // console.log(letter);
    console.log(this.letterService.words);
  }


}
