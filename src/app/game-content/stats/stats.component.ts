import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { SuccessModalComponent } from '../../success-modal/success-modal.component';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  @ViewChild(SuccessModalComponent) modal: SuccessModalComponent;
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
    this.modal.show();
    if (this.resolved === 5) {
    } else {
      this.resolved = this.resolved + 1;
    }
  }

}
