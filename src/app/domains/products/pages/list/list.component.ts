import { Component, inject, signal } from '@angular/core'
import {ProductComponent} from './../../components/product/product.component'
import {Product} from './../../../shared/models/product.model'
import { Title } from '@angular/platform-browser';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CartService } from '../../../shared/services/cart.service';
import { ProductService } from '../../../shared/services/product.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);
  //cart = signal<Product[]>([]);

  cartService = inject(CartService)
  productService = inject(ProductService)

  ngOnInit(){
    this.productService.getProducts()
    .subscribe({
      next: (products) =>{
        this.products.set(products)
      },
      error: (e) => {
        
      }
    }
    )
  }


  ftomChild(event: Event){
    console.log('esta en el padre');
    console.log(event);

  }

  addToCart(product: Product){
    this.cartService.addToCart(product)
  }

}
