import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes} from '@angular/router';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductComponent } from './components/products/product/product.component';
import { TableListPipe } from './components/calculadora/calculadora-pipe';
//firebase
import { AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';


import { environment } from '../environments/environment';
import { AuthService } from './services/auth.service';
import { ProductService } from './services/product.service';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { HistorialComponent } from './components/historial/historial.component';




@NgModule({
  declarations: [
    AppComponent,
    RegisterPageComponent,
    LoginPageComponent,
    ProductsComponent,
    ProductListComponent,
    ProductComponent,
    CalculadoraComponent,
    TableListPipe,
    HistorialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
   
  ],
  providers: [
    AuthService,
    ProductService,
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
