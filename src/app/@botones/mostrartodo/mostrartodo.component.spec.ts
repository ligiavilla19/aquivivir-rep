import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrartodoComponent } from './mostrartodo.component';

describe('MostrartodoComponent', () => {
  let component: MostrartodoComponent;
  let fixture: ComponentFixture<MostrartodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrartodoComponent]
    });
    fixture = TestBed.createComponent(MostrartodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
