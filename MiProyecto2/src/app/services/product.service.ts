import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Product } from '../models/product';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList: AngularFireList<any>;
  selectedProduct: Product = new Product();

  constructor(private firebase: AngularFireDatabase) { }

     

  getProducts(){
    return this.productList = this.firebase.list('products');
  }

  insertProduct(product: Product){
    this.productList.push({
      file: product.file,
      name: product.name,
      category: product.category,
      calorias: product.calorias,
      proteinas: product.proteinas,
      hidratos: product.hidratos,
      grasas: product.grasas,
      gramos: product.gramos

    });
  }
  updateProduct(product: Product){
    this.productList.update(product.$key, {
      name: product.name,
      category: product.category,
      calorias: product.calorias,
      proteinas: product.proteinas,
      hidratos: product.hidratos,
      grasas: product.grasas 
    });
  }
  deleteProduct($key: string){
    this.productList.remove($key);
  }
}
