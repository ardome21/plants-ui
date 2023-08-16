import { TestBed } from '@angular/core/testing';

import { ApiService } from './api';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('DataTransferService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler]
    });
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
