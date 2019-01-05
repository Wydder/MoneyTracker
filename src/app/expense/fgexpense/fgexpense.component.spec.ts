import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FgexpenseComponent } from './fgexpense.component';

describe('FgexpenseComponent', () => {
  let component: FgexpenseComponent;
  let fixture: ComponentFixture<FgexpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FgexpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FgexpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
