import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarPremiadoComponent } from './cadastrar-premiado.component';

describe('CadastrarPremiadoComponent', () => {
  let component: CadastrarPremiadoComponent;
  let fixture: ComponentFixture<CadastrarPremiadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarPremiadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarPremiadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
