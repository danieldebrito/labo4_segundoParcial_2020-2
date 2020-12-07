import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// ============================== FIREBASE ==================================== //
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
// ============================== mys modules ============================== //
import { LayoutModule } from './layout/layout.module';
import { AuthModule } from './auth/auth.module';
/*
import { TurnosModule } from './turnos/turnos.module';
import { PacientesComponentsModule } from './pacientes/pacientes-components.module';
import { AdminModule } from './admin/admin.module';
import { ProfesionalesModule } from './profesionales/profesionales.module';
*/


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    // ****************** SERVICES MODULE ************************ //
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    // ****************** mys MODULES ************************ //
    LayoutModule,
    AuthModule
    /*
    TurnosModule,
    AdminModule,
    PacientesComponentsModule,
    ProfesionalesModule*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
