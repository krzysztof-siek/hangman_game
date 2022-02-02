import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LettersService {
  words = ['one', 'two', 'three', 'four', 'five'];
  wrongAnswers = new Subject<number>();

  constructor() { }

  setNumberOfWrongAnswers(wrongAnswers: number): void {
    this.wrongAnswers.next(wrongAnswers);
  }

}
