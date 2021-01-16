import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeclaredJurisdictionStoreService {
  stepRegisterDj: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  constructor() { }

  getCurrentStep() {
    return this.stepRegisterDj.asObservable();
  }

  setNextStep() {
    const step = this.stepRegisterDj.getValue();
    const value = step + 1;
    if (value > 5) {
      this.stepRegisterDj.next(6);
      return;
    }
    this.stepRegisterDj.next(value);
  }
}
