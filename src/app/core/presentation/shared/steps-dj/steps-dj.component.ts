import { Component, OnInit } from '@angular/core';
import {DeclaredJurisdictionController} from '../../../domain/controller/declared-jurisdiction.controller';

@Component({
  selector: 'app-steps-dj',
  templateUrl: './steps-dj.component.html',
  styleUrls: ['./steps-dj.component.scss']
})
export class StepsDjComponent implements OnInit {
  currentStep$ = this.declaredJurisdictionCtrl.getCurrentStep();
  constructor(
    private declaredJurisdictionCtrl: DeclaredJurisdictionController
  ) { }

  ngOnInit(): void {
  }

}
