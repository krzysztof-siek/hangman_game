import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  wrongAnswers = 0;

  constructor() { }

  ngOnInit(): void {
  }

  answerHandler(): void {
    this.wrongAnswers = this.wrongAnswers + 1;
  }

}
