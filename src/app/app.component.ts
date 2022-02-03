import { Component, OnInit, ViewChild } from '@angular/core';
import { GameContentComponent } from './game-content/game-content.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(GameContentComponent) content: GameContentComponent;
  title = 'handmanGame';
  author = 'Krzysztof Siek';
  status: string | undefined;


  constructor() {}

  ngOnInit(): void {
  }




}
