import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewbtnComponent } from './addnewbtn.component';

describe('AddnewbtnComponent', () => {
  let component: AddnewbtnComponent;
  let fixture: ComponentFixture<AddnewbtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewbtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
