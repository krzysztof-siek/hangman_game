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
  @ViewChild(StatsComponent) stats: StatsComponent;
  @ViewChild(AlphabetComponent) alphabet: AlphabetComponent;
  status: string;
  drawnWord: string | undefined;
  matchLetters: string[] = [];
  clicked: string[] = [];
  wordsList: [];

  constructor(private letterService: LettersService) { }

  ngOnInit(): void {
    this.letterService.getAnswers().subscribe((res) => {
      this.wordsList = res.words;
      this.drawWord();
    });
  }


  drawWord(): void {
    const index = Math.floor(Math.random() * this.wordsList?.length);
    this.drawnWord = this.wordsList[index];
    this.wordsList.splice(index, 1);
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
