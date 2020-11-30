import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminGuard } from './admin.guard';
import { PacienteGuard } from './paciente.guard';
import { ProfecionalGuard } from './profecional.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AdminGuard,
    PacienteGuard,
    ProfecionalGuard,
  ],
})
export class GuardsModule { }
