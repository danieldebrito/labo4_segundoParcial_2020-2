import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';

import { AdministradoresRoutingModule } from './administradores-routing.module';
import { AdministradoresComponent } from './administradores.component';


@NgModule({
  declarations: [AdministradoresComponent],
  imports: [
    CommonModule,
    AdministradoresRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [],
  providers: [
    AuthService
  ],
})
export class AdministradoresModule { }
