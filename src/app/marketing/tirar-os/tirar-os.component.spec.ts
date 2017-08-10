import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TirarOsComponent } from './tirar-os.component';

describe('TirarOsComponent', () => {
  let component: TirarOsComponent;
  let fixture: ComponentFixture<TirarOsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TirarOsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TirarOsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
