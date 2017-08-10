import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MudarstatusComponent } from './mudarstatus.component';

describe('MudarstatusComponent', () => {
  let component: MudarstatusComponent;
  let fixture: ComponentFixture<MudarstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MudarstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MudarstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
