import { Component, Input } from '@angular/core';
import { Challenge } from '../../models/challenge.model';

@Component({
  selector: 'challenge-dash',
  templateUrl: './challenge-dash.component.html',
  styleUrls: ['./challenge-dash.component.css']
})
export class ChallengeDashComponent {
  //@Input() challenges: Challenge[] | null = null;

  @Input() challenges: number[] | null = null;

  createChallenge: boolean = false;

}
