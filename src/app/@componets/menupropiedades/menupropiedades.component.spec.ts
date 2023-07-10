import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenupropiedadesComponent } from './menupropiedades.component';

describe('MenupropiedadesComponent', () => {
  let component: MenupropiedadesComponent;
  let fixture: ComponentFixture<MenupropiedadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenupropiedadesComponent]
    });
    fixture = TestBed.createComponent(MenupropiedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
