import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/auth/models/user.interface';

@Component({
  selector: 'app-user-detalle',
  templateUrl: './user-detalle.component.html',
  styleUrls: ['./user-detalle.component.css']
})
export class UserDetalleComponent implements OnInit {

  @Input() item: User = {};
  @Output() lanzaUser = new EventEmitter();

  constructor() { }

  public lanzarUser(user: User) {
    this.lanzaUser.emit({userLanzado: user});
  }

  ngOnInit() {
  }
}
