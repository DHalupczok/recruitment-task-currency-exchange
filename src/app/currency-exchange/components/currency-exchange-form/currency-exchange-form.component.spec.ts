import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyExchangeFormComponent } from './currency-exchange-form.component';

describe('CurrencyExchangeFormComponent', () => {
  let component: CurrencyExchangeFormComponent;
  let fixture: ComponentFixture<CurrencyExchangeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyExchangeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyExchangeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
