import { TestBed } from '@angular/core/testing';

import { OrdersService } from './orders.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('OrdersService', () => {
  let service: OrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(OrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
