import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputeNextTurnComponent } from './compute-next-turn.component';

describe('ComputeNextTurnComponent', () => {
  let component: ComputeNextTurnComponent;
  let fixture: ComponentFixture<ComputeNextTurnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComputeNextTurnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputeNextTurnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
