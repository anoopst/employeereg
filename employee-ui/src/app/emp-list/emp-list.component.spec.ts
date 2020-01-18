import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpListComponent } from './emp-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { EmpServiceService } from '../emp-service.service';

describe('EmpListComponent', () => {
  let component: EmpListComponent;
  let fixture: ComponentFixture<EmpListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgbModule,HttpClientModule],
      providers : [EmpServiceService],
      declarations: [ EmpListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
