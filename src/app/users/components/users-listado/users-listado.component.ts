import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/auth/models/user.interface';

@Component({
  selector: 'app-users-listado',
  templateUrl: './users-listado.component.html',
  styleUrls: ['./users-listado.component.css']
})
export class UsersListadoComponent implements OnInit {


  @Input() usuarios: User[];
  @Output() lanzaUsuario = new EventEmitter();
  public p: number;  // paginacion primer page

  constructor() {
    this.p = 1;
  }

  public enviarUsuario(usuario: User) {
    this.lanzaUsuario.emit({usuarioLanzado: usuario});
  }

  ngOnInit(): void {
  }

}
