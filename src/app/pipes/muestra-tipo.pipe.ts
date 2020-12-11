import { Pipe, PipeTransform } from '@angular/core';
import { UsuariosService } from 'src/app/auth/usuarios.service';
import { User } from '../auth/models/user.interface';

@Pipe({
  name: 'muestraTipo'
})
export class MuestraTipoPipe implements PipeTransform {

  item: User;

  constructor(
    private usrSvc: UsuariosService,
  ) { }


  transform(value: unknown, ...args: unknown[]): any {

    this.usrSvc.getItems().subscribe(response => {
      response.forEach(element => {
        if(element.dni === value){
          return element.role;
        };
      });
    });
  }

}
