import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {TaxPayer} from '../../../domain/model/tax-payer';

@Injectable({
  providedIn: 'root'
})
export class TaxPayerStoreService {
  taxPayer$: BehaviorSubject<TaxPayer> = new BehaviorSubject<TaxPayer>(null);
  constructor() { }

  getTaxPayer() {
    return this.taxPayer$.asObservable();
  }

  setTaxPayer(taxPayer) {
    this.taxPayer$.next(taxPayer);
  }
}
