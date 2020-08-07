import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpgridComponent } from './helpgrid.component';

describe('HelpgridComponent', () => {
  let component: HelpgridComponent;
  let fixture: ComponentFixture<HelpgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
