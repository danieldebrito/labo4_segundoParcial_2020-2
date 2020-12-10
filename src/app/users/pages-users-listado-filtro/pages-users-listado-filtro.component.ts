import { Component, OnInit } from '@angular/core';

import { Roles, User } from 'src/app/auth/models/user.interface';
import { UsuariosService } from 'src/app/auth/usuarios.service';

@Component({
  selector: 'app-pages-users-listado-filtro',
  templateUrl: './pages-users-listado-filtro.component.html',
  styleUrls: ['./pages-users-listado-filtro.component.css']
})
export class PagesUsersListadoFiltroComponent implements OnInit {

  public usuarios: User[] = [];


  constructor(
    private usrSvc: UsuariosService,
  ) { }

  public getAlumnos(rol: Roles) {
    this.usrSvc.getItems().subscribe(response => {
      this.usuarios = response.filter(item => item.role !== undefined && item.role === rol);
    });
  }

  ngOnInit(): void {
  }

}
