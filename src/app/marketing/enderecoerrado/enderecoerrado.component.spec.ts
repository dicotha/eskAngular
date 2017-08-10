import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoerradoComponent } from './enderecoerrado.component';

describe('EnderecoerradoComponent', () => {
  let component: EnderecoerradoComponent;
  let fixture: ComponentFixture<EnderecoerradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnderecoerradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnderecoerradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
