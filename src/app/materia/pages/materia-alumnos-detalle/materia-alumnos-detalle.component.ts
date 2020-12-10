import { Component, OnInit } from '@angular/core';

import { Materia } from 'src/app/materia/materia';
import { MateriaService } from 'src/app/materia/materia.service';

import { User } from 'src/app/auth/models/user.interface';

@Component({
  selector: 'app-materia-alumnos-detalle',
  templateUrl: './materia-alumnos-detalle.component.html',
  styleUrls: ['./materia-alumnos-detalle.component.css']
})
export class MateriaAlumnosDetalleComponent implements OnInit {

  public materias: Materia[] = [];
  public materia: Materia = {};

  public alumnos: User[] = [];
  public alumnosAdd: User[] = [];
  public alumno: User = {};

  public errorCupo = '';

  constructor(
    private matScv: MateriaService
  ) { }

  // ***************  MATERIAS *********************** //
  public getMaterias() {
    this.matScv.getItems().subscribe(response => {
      this.materias = response;
    });
  }

  public cargaMateria(event) {
    this.materia.alumnos = [];
    this.materia = {};
    this.materia = event.materiaLanzado;
    this.getAlumnos();
  }

  // ***************  ALUMNOS *********************** //
  public getAlumnos() {
    this.alumnos = this.materia.alumnos;
  }

  ngOnInit(): void {
    this.getMaterias();
  }
}
