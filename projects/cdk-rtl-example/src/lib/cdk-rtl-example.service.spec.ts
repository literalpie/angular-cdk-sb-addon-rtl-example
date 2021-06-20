import { TestBed } from '@angular/core/testing';

import { CdkRtlExampleService } from './cdk-rtl-example.service';

describe('CdkRtlExampleService', () => {
  let service: CdkRtlExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CdkRtlExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
