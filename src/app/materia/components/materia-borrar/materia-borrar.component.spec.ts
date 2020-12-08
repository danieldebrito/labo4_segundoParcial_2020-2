import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaBorrarComponent } from './materia-borrar.component';

describe('MateriaBorrarComponent', () => {
  let component: MateriaBorrarComponent;
  let fixture: ComponentFixture<MateriaBorrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateriaBorrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriaBorrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
