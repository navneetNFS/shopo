import { TestBed } from '@angular/core/testing';

import { ShopoCrudService } from './shopo-crud.service';

describe('ShopoCrudService', () => {
  let service: ShopoCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopoCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
