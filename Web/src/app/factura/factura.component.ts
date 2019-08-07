import { Component, OnInit } from '@angular/core';
import { personClient } from '../models/personClient';
import { Factura } from '../models/factura';
import { Productos } from '../models/producto';
import { Validators, FormGroup, FormControl, FormBuilder, FormGroupName } from '@angular/forms';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  user: personClient = {
    first_name: '',
    last_name: '',
    DNI: '',
    direccion: '',
    email: '',
    role_id: 1
  };
  factura: Factura = {
    numeroFactura: '',
    fechaFactura: '',
    id_cliente: 0
  };
  producto: Productos = {
    codigo: '',
    nombre: '',
    descripcion: '',
    cantidad: 0,
    precio: 0,

  };

  emailValidation = /^[\w]+@+[a-z 0-9]+\.+[a-z A-Z 0-9 .]*/;
  userform: FormGroup;
  facturaData: FormGroup;
  productForm: FormGroup;
  products: any = [];
  cantidadCompra = 0;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userform = this.fb.group({
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      DNI: new FormControl('', Validators.required),
      direccion: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([Validators.required, Validators.pattern(this.emailValidation)])),
      role_id: new FormControl('', Validators.required),
    }
    );
    this.facturaData = this.fb.group({
      numeroFactura: new FormControl('', Validators.required),
      fechaFactura: new FormControl('', Validators.required),
      id_cliente: new FormControl('', Validators.required),
    });

    this.productForm = this.fb.group({
      nombre: new FormControl('', Validators.required),
      codigo: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      catidad: new FormControl(0, Validators.required),
      precio: new FormControl(0, Validators.required)
    });
  }

}
