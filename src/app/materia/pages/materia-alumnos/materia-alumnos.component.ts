import { Component, OnInit } from '@angular/core';

import { Materia } from 'src/app/materia/materia';
import { MateriaService } from 'src/app/materia/materia.service';


import { User } from 'src/app/auth/models/user.interface';
import { UsuariosService } from 'src/app/auth/usuarios.service';


@Component({
  selector: 'app-materia-alumnos',
  templateUrl: './materia-alumnos.component.html',
  styleUrls: ['./materia-alumnos.component.css']
})
export class MateriaAlumnosComponent implements OnInit {

  public materias: Materia[] = [];
  public materia: Materia = {};

  constructor(
    private usrSvc: UsuariosService,
    private matScv: MateriaService
  ) { }

  public getMaterias() {
      this.matScv.getItems().subscribe(response => {
        this.materias = response;
      });
  }

  ngOnInit(): void {
    this.getMaterias();
  }

}
