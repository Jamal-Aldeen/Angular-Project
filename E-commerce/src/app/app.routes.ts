import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  }
  ,
  {
    path: 'register',
    component: RegisterComponent,
  }
  ,
  {
    path: 'products-card',
    component: ProductCardComponent,
  }
  ,
  {
    path: 'products-details',
    component: ProductDetailsComponent,
  }
  ,
  {
    path: 'cart',
    component: CartComponent,
  }
];
