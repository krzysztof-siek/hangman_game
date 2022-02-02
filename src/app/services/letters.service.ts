import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LettersService {
  wrongAnswers = new Subject<number>();

  constructor(private http: HttpClient) { }

  setNumberOfWrongAnswers(wrongAnswers: number): void {
    this.wrongAnswers.next(wrongAnswers);
  }

  getAnswers(): Observable<any> {
    return this.http.get('assets/answers.json');
  }

}
