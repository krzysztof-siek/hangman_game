import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { StatsComponent } from './stats/stats.component';
import { LettersService } from '../services/letters.service';
import { AlphabetComponent } from './alphabet/alphabet.component';

@Component({
  selector: 'app-game-content',
  templateUrl: './game-content.component.html',
  styleUrls: ['./game-content.component.scss']
})
export class GameContentComponent implements OnInit {
  @Output() showStatus = new EventEmitter<string>();
  status: string;
  @ViewChild(StatsComponent) stats: StatsComponent;
  @ViewChild(AlphabetComponent) alphabet: AlphabetComponent;
  drawnWord: string | undefined;
  matchLetters: any[] = [];
  clicked: any[] = [];

  constructor(private letterService: LettersService) { }

  ngOnInit(): void {
    this.drawWord();
  }

  drawWord(): void {
    this.drawnWord = this.letterService.words[Math.floor(Math.random() * this.letterService.words.length)];
  }

getClickedLetter(letter: string): void {
  if (this.drawnWord?.includes(letter)) {
    const separateLetters = [...this.drawnWord];
    separateLetters.map(el => {
      if (el === letter) {
        this.matchLetters.push(letter);
      }
    });
    if (this.drawnWord.length === this.matchLetters.length) {
      this.status = 'grats';
      this.showStatus.emit(this.status);
      setTimeout(() => {
        this.nextWord();
      }, 3000);
    }
  } else {
    if (!this.clicked.includes(letter)){
      this.stats.answerHandler();
    }
  }
  this.clicked.push(letter);
}

wrongAnswerHandler(wrongAnswers: number): void {
  this.letterService.setNumberOfWrongAnswers(wrongAnswers);
  if (wrongAnswers === 6) {
    this.status = 'gameOver';
    this.showStatus.emit(this.status);
  }
}

nextWord(): void {
  this.stats.resolvedHandler();
  this.letterService.setNumberOfWrongAnswers(0);
  this.alphabet.resetClickedList();
  this.stats.wrongAnswers = 0;
  this.matchLetters = [];
  this.clicked = [];
  this.drawWord();
  this.status = '';
  this.showStatus.emit(this.status);
}

}
