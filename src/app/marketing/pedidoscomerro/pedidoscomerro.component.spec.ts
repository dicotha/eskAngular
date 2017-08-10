import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoscomerroComponent } from './pedidoscomerro.component';

describe('PedidoscomerroComponent', () => {
  let component: PedidoscomerroComponent;
  let fixture: ComponentFixture<PedidoscomerroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoscomerroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoscomerroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
