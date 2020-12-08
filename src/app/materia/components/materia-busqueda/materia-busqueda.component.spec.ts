import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaBusquedaComponent } from './materia-busqueda.component';

describe('MateriaBusquedaComponent', () => {
  let component: MateriaBusquedaComponent;
  let fixture: ComponentFixture<MateriaBusquedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateriaBusquedaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriaBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
