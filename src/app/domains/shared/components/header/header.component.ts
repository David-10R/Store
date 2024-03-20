import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import {RouterLinkWithHref} from '@angular/router'


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLinkWithHref],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  hideSideMenu = signal(true)
  //total = signal(0)
 // @Input({required: true}) cart: Product[] = []

private cartService = inject(CartService)
cart = this.cartService.cart;
total = this.cartService.total;

  toogleSideMenu(){
    this.hideSideMenu.update(state => !state);
  }

  /*
  ngOnChanges(change: SimpleChanges){
    const cart = change['cart']

    if(cart){
      this.total.set(this.totalPriceCartHandler())
    }
  }

  
  totalPriceCartHandler(){
    return this.cart.reduce((total, prod) => total + prod.price, 0);
  }
  */
  
}
