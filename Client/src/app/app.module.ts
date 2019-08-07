import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordModule } from 'primeng/password';
import { MessagesModule } from 'primeng/messages';
import { PanelModule } from 'primeng/panel';
import { KeyFilterModule } from 'primeng/keyfilter';
import { ToastModule } from 'primeng/toast';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { MessageModule } from 'primeng/message';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { FacturaComponent } from './factura/factura.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroUsuarioComponent,
    FacturaComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MessagesModule,
    PanelModule,
    KeyFilterModule,
    PasswordModule,
    DropdownModule,
    ToastModule,
    BrowserModule,
    AppRoutingModule,
    MessageModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
