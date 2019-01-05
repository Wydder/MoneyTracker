import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FgincomeComponent } from './fgincome.component';

describe('FgincomeComponent', () => {
  let component: FgincomeComponent;
  let fixture: ComponentFixture<FgincomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FgincomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FgincomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
