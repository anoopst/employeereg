import { TestBed, inject } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { EmpServiceService } from './emp-service.service';

describe('EmpServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [EmpServiceService]
    });
  });

  it('should be created', inject([EmpServiceService], (service: EmpServiceService) => {
    expect(service).toBeTruthy();
  }));
});
