import {Component, Input, NgModule} from '@angular/core';
import {CardLabelComponent} from "./card-label/card-label.component";
import {CardPriceComponent} from "./card-price/card-price.component";
import {NgComponentOutlet} from "@angular/common";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardLabelComponent, CardPriceComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() gameCover: string = "";
  @Input() gameLabel: string = "";
  @Input() gameType: string = "";
  @Input() gamePrice: string = " ";

}
