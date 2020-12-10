import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Materia } from 'src/app/materia/materia';

@Component({
  selector: 'app-materia-detalle',
  templateUrl: './materia-detalle.component.html',
  styleUrls: ['./materia-detalle.component.css']
})
export class MateriaDetalleComponent implements OnInit {

  @Input() materia: Materia = {};
  @Output() lanzaMateria = new EventEmitter();

  constructor() { }

  public lanzarUser(materia: Materia) {
    this.lanzaMateria.emit({materiaLanzado: materia});
  }

  ngOnInit() {
  }
}
