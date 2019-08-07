
import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/product.service';

import { Product } from '../../models/product';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  newFood : any=[]
  productList: Product[];
  resultado: number;
  gramos:number;
  resultadoCalo:number;
  resultadoCalorias:number;
  resultadoProteinas:number;
  resultadoCarboHidratos:number;
  resultadoGrasas:number;
  resultadoProt:number;
  resultadoHidr:number;
  resultadoGras:number;
  
  constructor(
    private productService: ProductService
  ) { }

  selectFood(food:any){
  
    this.newFood.push({'name':food.name,'category':food.category,'proteinas':food.proteinas,'calorias':food.calorias,'hidratos':food.hidratos,'grasas':food.grasas})
    console.log(this.newFood)
    
    
  }
  calcular(){
    this.resultadoProteinas=(this.resultadoCalo * this.gramos)*9;
    this.resultadoCalorias=(this.resultadoProt * this.gramos)*4;
    this.resultadoCarboHidratos=(this.resultadoHidr * this.gramos)*4;
    this.resultadoGrasas=(this.resultadoGras * this.gramos)*4
  }
  
  ngOnInit()  {
    return this.productService.getProducts()
      .snapshotChanges().subscribe(item => {
        this.productList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.productList.push(x as Product);
        });
      });
  }

}