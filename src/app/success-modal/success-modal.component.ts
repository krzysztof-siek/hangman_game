import { Component, OnInit } from '@angular/core';
import { LettersService } from '../services/letters.service';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.scss']
})
export class SuccessModalComponent implements OnInit {
  showModal = false;
  content: any;
  title: any;
  timeSpent: number[];

  constructor(private letterService: LettersService) { }

  ngOnInit(): void {
  }

  show(): void {
    this.showModal = true;
    this.content = 'Przeszedłeś wszystkie etapy gry :)';
    this.title = 'Gratulacje! Udało Ci się!';
    this.timeSpent = this.letterService.getTime();
    console.log(this.timeSpent);
  }

  hide(): void {
    this.showModal = false;
    this.letterService.resetGameEmit();
  }



}
