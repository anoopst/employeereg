import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpMainComponent } from './emp-main.component';

describe('EmpMainComponent', () => {
  let component: EmpMainComponent;
  let fixture: ComponentFixture<EmpMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
