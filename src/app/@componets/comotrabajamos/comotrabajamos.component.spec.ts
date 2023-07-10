import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComotrabajamosComponent } from './comotrabajamos.component';

describe('ComotrabajamosComponent', () => {
  let component: ComotrabajamosComponent;
  let fixture: ComponentFixture<ComotrabajamosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComotrabajamosComponent]
    });
    fixture = TestBed.createComponent(ComotrabajamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
