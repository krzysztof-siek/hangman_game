import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { LettersService } from '../services/letters.service';
import { AlphabetComponent } from './alphabet/alphabet.component';
import { SuccessModalComponent } from '../success-modal/success-modal.component';


@Component({
  selector: 'app-game-content',
  templateUrl: './game-content.component.html',
  styleUrls: ['./game-content.component.scss']
})
export class GameContentComponent implements OnInit {
  @Output() showStatus = new EventEmitter<string>();
  @ViewChild(AlphabetComponent) alphabet: AlphabetComponent;
  @ViewChild(SuccessModalComponent) modal: SuccessModalComponent;
  status: string;
  drawnWord: string;
  matchLetters: string[] = [];
  clicked: string[] = [];
  wordsList: [];
  wrongAnswers = 0;
  resolved = 0;

  constructor(private letterService: LettersService) {}

  ngOnInit(): void {
    this.getWordsList();
    this.letterService.resetGame.subscribe(() => {
      this.resetData();
      this.resolved = 0;
    });
    this.letterService.timer();
  }

  getWordsList(): void {
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
    this.checkIfCorrectLetter(letter);
    this.clicked.push(letter);
  }

  checkIfCorrectLetter(letter: string): void {
    if ((this.drawnWord.includes(letter))) {
      this.isCorrectLetterHandler(letter);
    } else {
      if (!this.clicked.includes(letter)) {
        this.isWrongLetterHandler(this.wrongAnswers);
      }
    }
  }

  isCorrectLetterHandler(letter: string): void {
    const separateLetters = [...this.drawnWord];
    separateLetters.map(el => {
        if (el === letter) {
          this.matchLetters.push(letter);
        }
      });
    if (this.drawnWord.length === this.matchLetters.length) {
      if (this.resolved !== 5) {
        this.setNextWord();
      }
    }
  }

  isWrongLetterHandler(wrongAnswers: number): void {
    const updatedValue = this.wrongAnswers + 1;
    this.wrongAnswers = updatedValue;
    this.letterService.setNumberOfWrongAnswers(updatedValue);
    if (updatedValue === 6) {
      this.status = 'gameOver';
      this.showStatus.emit(this.status);
    }
  }

  setNextWord(): void {
    this.resolved = this.resolved + 1;
    if (this.resolved < 5) {
      this.status = 'grats';
      this.showStatus.emit(this.status);
      setTimeout(() => {
        this.resetData();
      }, 1000);
    } else {
      this.modal.show();
    }

  }

  resetData(): void {
    this.letterService.setNumberOfWrongAnswers(0);
    this.alphabet.resetClickedList();
    this.wrongAnswers = 0;
    this.matchLetters = [];
    this.clicked = [];
    this.drawWord();
    this.status = '';
    this.showStatus.emit(this.status);
  }


}
