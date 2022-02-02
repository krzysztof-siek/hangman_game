import { Component, OnInit } from '@angular/core';
import { LettersService } from '../services/letters.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  wrongAnswer = 'empty';

  constructor(private letterService: LettersService) { }

  ngOnInit(): void {
    this.letterService.wrongAnswers.subscribe((res) => {
      this.wrongAnswer = `wrong${res}`;
    });
  }

}
