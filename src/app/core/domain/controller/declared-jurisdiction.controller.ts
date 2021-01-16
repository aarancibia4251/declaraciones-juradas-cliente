import { Injectable } from '@angular/core';
import {DeclaredJurisdictionStoreService} from '../../data/datasource/store/declared-jurisdiction-store.service';

@Injectable({
  providedIn: 'root'
})
export class DeclaredJurisdictionController {

  constructor(
    private declaredJurisdictionStoreSrv: DeclaredJurisdictionStoreService
  ) { }

  getCurrentStep() {
    return this.declaredJurisdictionStoreSrv.getCurrentStep();
  }

  nextStep() {
    this.declaredJurisdictionStoreSrv.setNextStep();
  }
}
