import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReimbComponentComponent } from './new-reimb-component.component';

describe('NewReimbComponentComponent', () => {
  let component: NewReimbComponentComponent;
  let fixture: ComponentFixture<NewReimbComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewReimbComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewReimbComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
