import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkRtlExampleComponent } from './cdk-rtl-example.component';

describe('CdkRtlExampleComponent', () => {
  let component: CdkRtlExampleComponent;
  let fixture: ComponentFixture<CdkRtlExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdkRtlExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdkRtlExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
