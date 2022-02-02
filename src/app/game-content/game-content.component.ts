import { Component, OnInit, ViewChild } from '@angular/core';
import { StatsComponent } from './stats/stats.component';
import { LettersService } from '../services/letters.service';

@Component({
  selector: 'app-game-content',
  templateUrl: './game-content.component.html',
  styleUrls: ['./game-content.component.scss']
})
export class GameContentComponent implements OnInit {
  @ViewChild(StatsComponent) stats: StatsComponent;
  drawnWord: string | undefined;
  matchLetters: any[] = [];
  clicked: any[] = [];

  constructor(private letterService: LettersService) { }

  ngOnInit(): void {
    this.drawnWord = this.letterService.words[Math.floor(Math.random() * this.letterService.words.length)];
}

getClickedLetter(letter: string): void {
  if (this.drawnWord?.includes(letter)) {
    this.matchLetters.push(letter);
  } else {
    if (!this.clicked.includes(letter)){
      this.stats.answerHandler();
    }
  }
  this.clicked.push(letter);
}

wrongAnswerHandler(wrongAnswers: number): void {
  this.letterService.setNumberOfWrongAnswers(wrongAnswers);
}

}
