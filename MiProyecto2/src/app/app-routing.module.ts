import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import {LoginPageComponent} from './components/login-page/login-page.component';
import {RegisterPageComponent} from './components/register-page/register-page.component';
import {ProductsComponent} from './components/products/products.component';
import {ProductListComponent} from './components/products/product-list/product-list.component'; 
import { CalculadoraComponent } from 'src/app/components/calculadora/calculadora.component';

export const routes: Routes = [
  {path:'login-page', component: LoginPageComponent},
  {path:'register', component: RegisterPageComponent},
  {path:'products', component: ProductsComponent},
  {path:'product-list', component: ProductListComponent},
  {path:'calculadora', component: CalculadoraComponent}
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
