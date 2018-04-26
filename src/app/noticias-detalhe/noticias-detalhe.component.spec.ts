import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasDetalheComponent } from './noticias-detalhe.component';

describe('NoticiasDetalheComponent', () => {
  let component: NoticiasDetalheComponent;
  let fixture: ComponentFixture<NoticiasDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiasDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
