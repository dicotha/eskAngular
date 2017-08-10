import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControledestatusComponent } from './controledestatus.component';

describe('ControledestatusComponent', () => {
  let component: ControledestatusComponent;
  let fixture: ComponentFixture<ControledestatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControledestatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControledestatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
