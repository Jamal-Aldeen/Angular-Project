import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', component: ProductsComponent, title: 'Home' },
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: 'register', component: RegisterComponent, title: 'Register' },
  { path: 'cart', component: CartComponent, title: 'Cart' },
  { path: 'product/:id', component: ProductDetailsComponent, title: 'Product Details' },
  { path: '**', component: PageNotFoundComponent, title: '404' }
];