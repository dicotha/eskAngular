import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprovaremmassaComponent } from './aprovaremmassa.component';

describe('AprovaremmassaComponent', () => {
  let component: AprovaremmassaComponent;
  let fixture: ComponentFixture<AprovaremmassaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprovaremmassaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprovaremmassaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
