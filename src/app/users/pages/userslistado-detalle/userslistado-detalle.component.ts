import { Component, OnInit } from '@angular/core';

import { Roles, User } from 'src/app/auth/models/user.interface';
import { UsuariosService } from 'src/app/auth/usuarios.service';

@Component({
  selector: 'app-userslistado-detalle',
  templateUrl: './userslistado-detalle.component.html',
  styleUrls: ['./userslistado-detalle.component.css']
})
export class UserslistadoDetalleComponent implements OnInit {

  public usuarios: User[] = [];


  constructor( private usrSvc: UsuariosService ) { }

  public getAlumnos(tipo) {
    if(tipo === '') {
      this.usrSvc.getItems().subscribe(response => {
        this.usuarios = response; });
    } else {
      this.usrSvc.getItems().subscribe(response => {
        this.usuarios = response.filter(item => item.role !== undefined && item.role === tipo);
      });
    }
  }

  ngOnInit(): void {
  }

}
