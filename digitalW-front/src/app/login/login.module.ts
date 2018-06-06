import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material-module/material.module';

@NgModule({
  imports: [
    MaterialModule
  ],
  declarations: [
    LoginComponent,
  ],

  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
