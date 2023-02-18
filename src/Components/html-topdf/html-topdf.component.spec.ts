import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlTopdfComponent } from './html-topdf.component';

describe('HtmlTopdfComponent', () => {
  let component: HtmlTopdfComponent;
  let fixture: ComponentFixture<HtmlTopdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlTopdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlTopdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
