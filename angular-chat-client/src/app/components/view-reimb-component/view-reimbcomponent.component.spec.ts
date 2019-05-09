import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReimbcomponentComponent } from './view-reimbcomponent.component';

describe('ViewReimbcomponentComponent', () => {
  let component: ViewReimbcomponentComponent;
  let fixture: ComponentFixture<ViewReimbcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewReimbcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewReimbcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
