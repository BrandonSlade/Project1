import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolvePendingComponentComponent } from './resolve-pending-component.component';

describe('ResolvePendingComponentComponent', () => {
  let component: ResolvePendingComponentComponent;
  let fixture: ComponentFixture<ResolvePendingComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResolvePendingComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolvePendingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
