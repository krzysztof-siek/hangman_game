import { Component, OnInit } from '@angular/core';
import { LettersService } from '../services/letters.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  wrongAnswer = 'empty';
  imagesLoad = new Array();

  constructor(private letterService: LettersService) { }

  ngOnInit(): void {
    this.letterService.wrongAnswers.subscribe((res) => {
      this.wrongAnswer = `wrong${res}`;
    });
    this.pload(
      '/assets/hangman/1.png',
      '/assets/hangman/2.png',
      '/assets/hangman/3.png',
      '/assets/hangman/4.png',
      '/assets/hangman/5.png',
      '/assets/hangman/6.png'
    );
  }

  pload(...args: any[]): void {
    for (let i = 0; i < args.length; i++) {
      this.imagesLoad[i] = new Image();
      this.imagesLoad[i].src = args[i];
    }
  }

}
