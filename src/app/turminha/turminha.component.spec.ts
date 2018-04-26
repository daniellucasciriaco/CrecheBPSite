import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurminhaComponent } from './turminha.component';

describe('TurminhaComponent', () => {
  let component: TurminhaComponent;
  let fixture: ComponentFixture<TurminhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurminhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurminhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
