import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { ReversePipe } from '@shared/pipes/reverse.pipe';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';

import { UpperCasePipe , CurrencyPipe, DatePipe} from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [UpperCasePipe, CurrencyPipe, DatePipe, ReversePipe,TimeAgoPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required: true}) product!: Product 

  @Output() addToCart = new EventEmitter();

  addToCartHandler(){
    console.log('Click form child')
    this.addToCart.emit(this.product);
  }
}
