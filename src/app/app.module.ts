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
import { MateriaModule } from './materia/materia.module';
import { UsersModule } from './users/users.module';
import { MuestraTipoPipe } from './pipes/muestra-tipo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MuestraTipoPipe
  ],
  imports: [
    // ****************** ANGULAR MODULES ************************ //
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    // ****************** SERVICES MODULES ************************ //
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    // ****************** MYS MODULES ************************ //
    LayoutModule,
    AuthModule,
    MateriaModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
