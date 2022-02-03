import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.scss']
})
export class SuccessModalComponent implements OnInit {
  showModal = false;
  content: any;
  title: any;

  constructor() { }

  ngOnInit(): void {
  }

  show(): void {
    this.showModal = true;
    this.content = 'Przeszedłeś wszystkie etapy gry :)';
    this.title = 'Gratulacje! Udało Ci się!';
  }

  hide(): void {
    this.showModal = false;
  }



}
