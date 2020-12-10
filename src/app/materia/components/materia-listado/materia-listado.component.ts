import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Materia } from 'src/app/materia/materia';

@Component({
  selector: 'app-materia-listado',
  templateUrl: './materia-listado.component.html',
  styleUrls: ['./materia-listado.component.css']
})
export class MateriaListadoComponent implements OnInit {


  @Input() materias: Materia[];
  @Output() lanzaMateria = new EventEmitter();
  public p: number;  // paginacion primer page

  constructor() {
    this.p = 1;
  }

  public enviarMateria(materia: Materia) {
    this.lanzaMateria.emit({materiaLanzado: materia});
  }

  ngOnInit(): void {
  }

}
