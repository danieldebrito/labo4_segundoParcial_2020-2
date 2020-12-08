import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaModificarComponent } from './materia-modificar.component';

describe('MateriaModificarComponent', () => {
  let component: MateriaModificarComponent;
  let fixture: ComponentFixture<MateriaModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateriaModificarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriaModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
