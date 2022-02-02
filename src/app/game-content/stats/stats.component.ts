import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  @Output() emitWrongAnswer = new EventEmitter<number>();
  wrongAnswers = 0;
  resolved = 0;

  constructor() { }

  ngOnInit(): void {
  }

  answerHandler(): void {
    this.wrongAnswers = this.wrongAnswers + 1;
    this.emitWrongAnswer.emit(this.wrongAnswers);
  }

  resolvedHandler(): void {
    this.resolved = this.resolved + 1;
  }

}
