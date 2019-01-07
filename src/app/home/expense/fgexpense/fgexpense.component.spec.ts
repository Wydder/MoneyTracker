import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FGexpenseComponent } from './fgexpense.component';

describe('FGexpenseComponent', () => {
  let component: FGexpenseComponent;
  let fixture: ComponentFixture<FGexpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FGexpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FGexpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
