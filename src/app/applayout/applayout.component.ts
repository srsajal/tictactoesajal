import { Component } from '@angular/core';
import { GameboardComponent } from "../gameboard/gameboard.component";
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-applayout',
  standalone: true,
  imports: [GameboardComponent, HeaderComponent, FooterComponent],
  templateUrl: './applayout.component.html',
  styleUrl: './applayout.component.scss'
})
export class ApplayoutComponent {

}
