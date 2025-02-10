import { Component } from '@angular/core';
import Products  from  '../../../../public/products.json';
import { ProductCardComponent } from "../product-card/product-card.component";

@Component({
  selector: 'app-products',
  imports: [ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: any[] = Products.products;

}
