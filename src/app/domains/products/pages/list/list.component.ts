import { Component, signal } from '@angular/core'
import {ProductComponent} from './../../components/product/product.component'
import {Product} from './../../../shared/models/product.model'
import { Title } from '@angular/platform-browser';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);

  constructor(){
    const initProducts: Product[] = [
      {
      id: Date.now(),
      title: 'Pro 1',
      price: 100,
      image: "https://picsum.photos/640/640?r=23",
      creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 2',
        price: 100,
        image: "https://picsum.photos/640/640?r=12",
        creationAt: new Date().toISOString()
        },
        
      {
        id: Date.now(),
        title: 'Pro 3',
        price: 100,
        image: "https://picsum.photos/640/640?r=13",
        creationAt: new Date().toISOString()

        },
        {
          id: Date.now(),
          title: 'Pro 4',
          price: 100,
          image: "https://picsum.photos/640/640?r=24",
          creationAt: new Date().toISOString()
          },
          {
            id: Date.now(),
            title: 'Pro 5',
            price: 100,
            image: "https://picsum.photos/640/640?r=15",
            creationAt: new Date().toISOString()
            },
            
          {
            id: Date.now(),
            title: 'Pro 6',
            price: 100,
            image: "https://picsum.photos/640/640?r=16",
            creationAt: new Date().toISOString()
    
            }
    ];

    this.products.set(initProducts)
  }

  ftomChild(event: Event){
    console.log('esta en el padre');
    console.log(event);

  }

}
