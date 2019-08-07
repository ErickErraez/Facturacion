import { Component, OnInit } from '@angular/core';
import { Productos } from '../models/producto';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  producto: Productos = {
    codigo: '',
    nombre: '',
    descripcion: '',
    cantidad: 0,
    precio: 0,

  };
  productForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.productForm = this.fb.group({
      nombre: new FormControl('', Validators.required),
      codigo: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      cantidad: new FormControl(0, Validators.required),
      precio: new FormControl(0, Validators.required)
    });
  }

}
