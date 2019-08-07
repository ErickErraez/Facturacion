import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Persona } from '../Models/persona';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {
  userform: FormGroup;
  submitted: boolean;
  genders: any = [];
  roles: any = [];
  emailValidation = /^[\w]+@+[a-z 0-9]+\.+[a-z A-Z 0-9 .]*/;
  description: string;
  user: Persona = {
    first_name: '',
    last_name: '',
    DNI: '',
    direccion: '',
    code_postal: '',
    email: '',
    password: '',
    gender_id: 0,
    role_id: 0
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userform = this.fb.group({
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      DNI: new FormControl('', Validators.required),
      direccion: new FormControl('', Validators.required),
      code_postal: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([Validators.required, Validators.pattern(this.emailValidation)])),
      password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
      confirmPassword: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
      gender_id: new FormControl('', Validators.required),
      role_id: new FormControl('', Validators.required),
    }
    );

    this.genders = [];
    this.genders.push({ label: 'Select Gender', value: '' });
    this.genders.push({ label: 'Male', value: '1' });
    this.genders.push({ label: 'Female', value: '2' });
    this.roles = [];
    this.roles.push({ label: 'Select Rol', value: '' });
    this.roles.push({ label: 'Empleado', value: '2' });
    this.roles.push({ label: 'Proveedor', value: '3' });

  }
  onSubmit(value: string) {
    this.submitted = true;
    console.log(this.user);
  }
}
