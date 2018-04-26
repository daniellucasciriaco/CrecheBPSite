import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboradoresDetalheComponent } from './colaboradores-detalhe.component';

describe('ColaboradoresDetalheComponent', () => {
  let component: ColaboradoresDetalheComponent;
  let fixture: ComponentFixture<ColaboradoresDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColaboradoresDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColaboradoresDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
