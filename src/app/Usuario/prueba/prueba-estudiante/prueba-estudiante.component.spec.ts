import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaEstudianteComponent } from './prueba-estudiante.component';

describe('PruebaEstudianteComponent', () => {
  let component: PruebaEstudianteComponent;
  let fixture: ComponentFixture<PruebaEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaEstudianteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
