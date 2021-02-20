import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegPasajeroComponent } from './reg-pasajero.component';

describe('RegPasajeroComponent', () => {
  let component: RegPasajeroComponent;
  let fixture: ComponentFixture<RegPasajeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegPasajeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegPasajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
