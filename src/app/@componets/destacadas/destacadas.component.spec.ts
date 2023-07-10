import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestacadasComponent } from './destacadas.component';

describe('DestacadasComponent', () => {
  let component: DestacadasComponent;
  let fixture: ComponentFixture<DestacadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DestacadasComponent]
    });
    fixture = TestBed.createComponent(DestacadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
