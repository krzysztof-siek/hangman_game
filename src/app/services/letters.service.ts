import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LettersService {
  words = ['one', 'two', 'three', 'four', 'five'];

  constructor() { }

}
