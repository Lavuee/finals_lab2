import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RabiesCare } from './rabies-care';

describe('RabiesCare', () => {
  let component: RabiesCare;
  let fixture: ComponentFixture<RabiesCare>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RabiesCare]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RabiesCare);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
