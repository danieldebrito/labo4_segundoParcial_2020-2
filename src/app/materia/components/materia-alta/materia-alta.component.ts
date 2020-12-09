import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Materia } from 'src/app/materia/materia';
import { MateriaService } from 'src/app/materia/materia.service';


import { User } from 'src/app/auth/models/user.interface';
import { UsuariosService } from 'src/app/auth/usuarios.service';

@Component({
  selector: 'app-materia-alta',
  templateUrl: './materia-alta.component.html',
  styleUrls: ['./materia-alta.component.css']
})
export class MateriaAltaComponent implements OnInit {

  public showErrors = false;

  public profesores: User[] = [];
  public profesoresAdd: User[] = [];
  public profesor: User = {};

  public materias: Materia[] = [];
  public materia: Materia = {};

  materiaForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(150), Validators.pattern("[a-zA-Z ]{2,150}")]),
    cuatrimestre: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(1), Validators.pattern("^[0-9]*$")]),
    cupo: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(3), Validators.pattern("[a-zA-Z ]{2,41}")]),
    año: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern("^[0-9]*$")]),
    // textoTemplate: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(150), Validators.pattern("[a-zA-Z ]{2,150}")]),
    // numeroTemplate: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(8), Validators.pattern("^[0-9]*$")]),
  });

  constructor(
    private usrSvc: UsuariosService,
    private matScv: MateriaService
  ) { }

  public resetError() {
    this.showErrors = false;
  }

  // **************** MATERIA ***************** //
  public add() {
    let materia: Materia = this.materiaForm.value;
    materia.profesores = this.profesoresAdd;
    this.matScv.addItem(materia);
  }

  public agregarUsuario(event) {
    this.profesoresAdd.push(event.usuarioLanzado);
  }

  // **************** USUARIO ***************** //
  public getProfesores() {
    this.usrSvc.getItems().subscribe(response => {
      this.profesores = response.filter( item => item.role == 'PROFESOR');
      return response;
    });
  }

  ngOnInit(): void {
    this.getProfesores();
  }
}
