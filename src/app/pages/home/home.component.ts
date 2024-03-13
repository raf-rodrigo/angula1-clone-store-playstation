import {Component, Input} from '@angular/core';
import {MenuBarComponent} from "../../components/menu-bar/menu-bar.component";
import {CardComponent} from "../../components/card/card.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


}
