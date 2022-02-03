import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LettersService {
  wrongAnswers = new Subject<number>();
  resetGame = new Subject<void>();
  interval: any;
  time = 0;
  display: any;

  constructor(private http: HttpClient) { }

  setNumberOfWrongAnswers(wrongAnswers: number): void {
    this.wrongAnswers.next(wrongAnswers);
  }

  resetGameEmit(): void {
    this.resetGame.next();
  }

  getAnswers(): Observable<any> {
    return this.http.get('assets/answers.json');
  }

  timer(): void {
    this.interval = setInterval(() => {
      if (this.time === 0) {
        this.time++;
      } else {
        this.time++;
      }
      this.display = this.transformTime(this.time);
    }, 1000);
  }

  transformTime(value: number): any {
    const minutes: number = Math.floor(value / 60);
    const seconds = value - minutes * 60;
    const time = [minutes, seconds];
    return time;
  }

  getTime(): any {
    return this.display;
  }

}
