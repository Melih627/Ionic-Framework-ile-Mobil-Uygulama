import { TestBed } from '@angular/core/testing';

import { ProductsForSaleService } from './products-for-sale.service';

describe('ProductsForSaleService', () => {
  let service: ProductsForSaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsForSaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
