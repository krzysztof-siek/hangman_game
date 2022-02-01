import { Component, OnInit, ViewChild } from '@angular/core';
import { LettersService } from './services/letters.service';
import { StatsComponent } from './stats/stats.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(StatsComponent) stats: StatsComponent;
  title = 'handmanGame';
  author = 'Krzysztof Siek';
  drawnWord: string | undefined;
  matchLetters: any[] = [];
  clicked: any[] = [];

  constructor(private letterService: LettersService) {}

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


}
