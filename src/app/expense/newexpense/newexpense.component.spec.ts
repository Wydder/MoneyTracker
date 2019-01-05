import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewexpenseComponent } from './newexpense.component';

describe('NewexpenseComponent', () => {
  let component: NewexpenseComponent;
  let fixture: ComponentFixture<NewexpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewexpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewexpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
