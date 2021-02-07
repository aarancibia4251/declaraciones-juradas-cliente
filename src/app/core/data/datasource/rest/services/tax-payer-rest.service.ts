import { Injectable } from '@angular/core';
import {ApiHttpClientService} from '../../adapter/api-rest/api-http-client.service';

@Injectable({
  providedIn: 'root'
})
export class TaxPayerRestService {

  constructor(
    private apiHttpClient: ApiHttpClientService
  ) { }

  saveTaxPayer() {
    return new Promise(((resolve, reject) => {

    }));
  }
}
