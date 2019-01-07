import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewincomeComponent } from './newincome.component';

describe('NewincomeComponent', () => {
  let component: NewincomeComponent;
  let fixture: ComponentFixture<NewincomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewincomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewincomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
