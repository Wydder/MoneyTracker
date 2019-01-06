import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeitemComponent } from './incomeitem.component';

describe('IncomeitemComponent', () => {
  let component: IncomeitemComponent;
  let fixture: ComponentFixture<IncomeitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
