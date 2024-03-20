import { Component, Input, SimpleChanges, signal } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  hideSideMenu = signal(true)
  total = signal(0)


  @Input({required: true}) cart: Product[] = []
  toogleSideMenu(){
    this.hideSideMenu.update(state => !state);
  }

  ngOnChanges(change: SimpleChanges){
    const cart = change['cart']

    if(cart){
      this.total.set(this.totalPriceCartHandler())
    }
  }

  
  totalPriceCartHandler(){
    return this.cart.reduce((total, prod) => total + prod.price, 0);
  }
  
}
