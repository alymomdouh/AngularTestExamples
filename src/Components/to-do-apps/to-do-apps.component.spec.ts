import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoAppsComponent } from './to-do-apps.component';

describe('ToDoAppsComponent', () => {
  let component: ToDoAppsComponent;
  let fixture: ComponentFixture<ToDoAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoAppsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
