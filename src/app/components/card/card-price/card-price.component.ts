import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-price',
  standalone: true,
  imports: [],
  templateUrl: './card-price.component.html',
  styleUrl: './card-price.component.css'
})
export class CardPriceComponent {
  @Input()
  gameType: string = "";
  @Input()
  gamePrice: string = " ";

}
