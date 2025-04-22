import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ChartService } from './chart.service';

describe('ChartService', () => {
  let service: ChartService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ChartService]
    });

    service = TestBed.inject(ChartService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch sales data from API', () => {
    const mockData = [{ date: '2024-01-01', sales: 100 }];

    service.getSalesData().subscribe(data => {
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne(service['apiUrl']);
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });

  it('should fetch bar chart data from JSON', () => {
    const mockData = {
      labels: ["Mon", "Tue"],
      datasets: [{ label: "Visits", data: [10, 20] }]
    };

    service.getBarChartData().subscribe(data => {
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne(service['jsonUrl']);
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });
});
