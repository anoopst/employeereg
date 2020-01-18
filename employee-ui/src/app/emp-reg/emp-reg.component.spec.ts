import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { EmpRegComponent } from './emp-reg.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmpServiceService } from '../emp-service.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('EmpRegComponent', () => {
  let component: EmpRegComponent;
  let fixture: ComponentFixture<EmpRegComponent>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        BrowserModule,
        NgbModule,
        HttpClientModule,
        RouterTestingModule        
      ],
      providers : [EmpServiceService],
      declarations: [EmpRegComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(EmpRegComponent);    
  });

  it('should create', () => {
    let component = fixture.componentInstance;
    expect(component).toBeTruthy();    
  });

  it('is form valid when empty',() => {
    let component = fixture.componentInstance;
    fixture.detectChanges();
    
    expect(component.empForm.valid).toBeFalsy();
  });

  it('is form valid when firstName is 2 letters',() => {
    let component = fixture.componentInstance;
    fixture.detectChanges();
    let firstName = component.empForm.controls["firstName"];
    firstName.setValue("Hi");
     
    expect(component.empForm.valid).toBeFalsy();
    expect(component.empForm.controls["firstName"].valid).toBeFalsy();
  });

  it('is form valid when lastName is empty',() => {
    let component = fixture.componentInstance;
    fixture.detectChanges();
   
    expect(component.empForm.valid).toBeFalsy();
    expect(component.empForm.controls["lastName"].valid).toBeFalsy();
  });

  it('is form valid when lastName is empty',() => {
    let component = fixture.componentInstance;
    fixture.detectChanges();
   
    expect(component.empForm.valid).toBeFalsy();
    expect(component.empForm.controls["lastName"].valid).toBeFalsy();
  });

  it('is form valid when department is empty',() => {
    let component = fixture.componentInstance;
    fixture.detectChanges();
   
    expect(component.empForm.valid).toBeFalsy();
    expect(component.empForm.controls["department"].valid).toBeFalsy();
  });

  it('is form valid when gender is empty',() => {
    let component = fixture.componentInstance;
    fixture.detectChanges();
   
    expect(component.empForm.valid).toBeFalsy();
    expect(component.empForm.controls["gender"].valid).toBeFalsy();
  });
  

  it('form is valid when all fields are filled', () => {
    let component = fixture.componentInstance;
    fixture.detectChanges();
    let firstName = component.empForm.controls["firstName"];
    firstName.setValue("Anoop");
    let lastName = component.empForm.controls["lastName"];
    lastName.setValue("S");
    let dob = component.empForm.controls["dob"];
    dob.setValue({ 'day': 1, 'month': 1, 'year': 2010 });
    let department = component.empForm.controls["department"];
    department.setValue("IT");
    let gender = component.empForm.controls["gender"];
    gender.setValue("Male");
    fixture.detectChanges();
    expect(component.empForm.valid).toBeTruthy();
    
  })
  
});
