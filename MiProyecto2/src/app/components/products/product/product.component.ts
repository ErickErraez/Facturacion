import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Product} from '../../../models/product';
import {ToastrService} from 'ngx-toastr';
import * as firebase from 'firebase';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private toastr: ToastrService

  ) { }

  ngOnInit() {
    this.productService.getProducts();
    this.resetForm();
  }
  featuredPhotoSlected(event: any){
    const file: File = event.target.files[0];
    const metaData = {'contentType': file.type};
    const storageRef: firebase.storage.Reference = firebase.storage().ref('/productos/imagen');
    storageRef.put(file, metaData);

  }
 onSubmit(productForm: NgForm){
   if (productForm.value.$key == null)
   this.productService.insertProduct(productForm.value)
   else
   this.productService.updateProduct(productForm.value);
   this.resetForm(productForm);
   this.toastr.success('Operación Exitosa', 'Operación Exitosa');

 }

 resetForm(productForm?: NgForm){
   if(productForm != null)
   productForm.reset();
   this.productService.selectedProduct = new Product ();

 };
}
