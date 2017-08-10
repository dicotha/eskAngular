import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaixapagamentoComponent } from './baixapagamento.component';

describe('BaixapagamentoComponent', () => {
  let component: BaixapagamentoComponent;
  let fixture: ComponentFixture<BaixapagamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaixapagamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaixapagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
