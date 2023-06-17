import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeDashComponent } from './challenge-dash.component';

describe('ChallengeDashComponent', () => {
  let component: ChallengeDashComponent;
  let fixture: ComponentFixture<ChallengeDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengeDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChallengeDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
