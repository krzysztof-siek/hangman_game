import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent {
  @Input() wrongAnswers: number;
  @Input() resolved: number;

  constructor() { }


}
