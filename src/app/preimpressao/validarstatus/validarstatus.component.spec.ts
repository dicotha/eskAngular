import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarstatusComponent } from './validarstatus.component';

describe('ValidarstatusComponent', () => {
  let component: ValidarstatusComponent;
  let fixture: ComponentFixture<ValidarstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidarstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidarstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
