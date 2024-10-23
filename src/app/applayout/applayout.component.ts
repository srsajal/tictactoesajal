import { Component } from '@angular/core';
import { GameboardComponent } from "../gameboard/gameboard.component";

@Component({
  selector: 'app-applayout',
  standalone: true,
  imports: [GameboardComponent],
  templateUrl: './applayout.component.html',
  styleUrl: './applayout.component.scss'
})
export class ApplayoutComponent {

}
