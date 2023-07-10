import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuultimosComponent } from './menuultimos.component';

describe('MenuultimosComponent', () => {
  let component: MenuultimosComponent;
  let fixture: ComponentFixture<MenuultimosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuultimosComponent]
    });
    fixture = TestBed.createComponent(MenuultimosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
