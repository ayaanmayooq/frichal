import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifsSidebarComponent } from './notifs-sidebar.component';

describe('NotifsSidebarComponent', () => {
  let component: NotifsSidebarComponent;
  let fixture: ComponentFixture<NotifsSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifsSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotifsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
