import { Component, OnInit } from '@angular/core';

import { Materia } from 'src/app/materia/materia';
import { MateriaService } from 'src/app/materia/materia.service';


import { User } from 'src/app/auth/models/user.interface';
import { UsuariosService } from 'src/app/auth/usuarios.service';
import { isUndefined } from 'util';


@Component({
  selector: 'app-materia-alumnos',
  templateUrl: './materia-alumnos.component.html',
  styleUrls: ['./materia-alumnos.component.css']
})
export class MateriaAlumnosComponent implements OnInit {

  public materias: Materia[] = [];
  public materia: Materia = {};

  public alumnos: User[] = [];
  public alumnosAdd: User[] = [];
  public alumno: User = {};

  public errorCupo = '';

  constructor(
    private usrSvc: UsuariosService,
    private matScv: MateriaService
  ) { }

  // ***************  MATERIAS *********************** //

  public getMaterias() {
    this.matScv.getItems().subscribe(response => {
      this.materias = response;
    });
  }

  public cargaMateria(event) {
    this.materia = event.materiaLanzado;
  }

  public modificaMateria(){
    this.materia.alumnos = this.alumnosAdd;
    this.matScv.updateItem(this.materia)
  }

  

  // ***************  ALUMNOS *********************** //

  public getAlumnos() {
    this.usrSvc.getItems().subscribe(response => {
      this.alumnos = response.filter(item => item.role !== undefined && item.role === 'ALUMNO');
    });
  }

  public agregarAlumno(event) {
    if(  this.materia.cupo > this.alumnosAdd.length ) {
      this.alumnosAdd.push(event.usuarioLanzado);
    } else {
      this.errorCupo = 'No hay mas cupo en esta materia';
    }
  }

  ngOnInit(): void {
    this.getMaterias();
    this.getAlumnos();
  }

}
