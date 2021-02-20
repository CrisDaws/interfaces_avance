import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegConductorComponent } from './reg-conductor.component';

describe('RegConductorComponent', () => {
  let component: RegConductorComponent;
  let fixture: ComponentFixture<RegConductorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegConductorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegConductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
