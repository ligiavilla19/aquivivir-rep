import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximoComponent } from './proximo.component';

describe('ProximoComponent', () => {
  let component: ProximoComponent;
  let fixture: ComponentFixture<ProximoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProximoComponent]
    });
    fixture = TestBed.createComponent(ProximoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
