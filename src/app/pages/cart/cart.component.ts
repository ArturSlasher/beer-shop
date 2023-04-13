import { Component } from '@angular/core';
import { BeerService } from 'app/services/beer.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  cartBeers$ = this.beerService.cartBeers$;

  constructor(
    private beerService: BeerService
  ) { }

  removeFromCart(beer: string) {
    this.beerService.removeFromCart(beer);
  }

}
