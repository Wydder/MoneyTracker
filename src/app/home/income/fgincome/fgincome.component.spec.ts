import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FGincomeComponent } from './fgincome.component';

describe('FGincomeComponent', () => {
  let component: FGincomeComponent;
  let fixture: ComponentFixture<FGincomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FGincomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FGincomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
