import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DeclaredJurisdictionController} from '../../../domain/controller/declared-jurisdiction.controller';
import {Constants} from '../../../../common/utils/Constants';

@Component({
  selector: 'app-register-buttons-dj',
  templateUrl: './register-buttons-dj.component.html',
  styleUrls: ['./register-buttons-dj.component.scss']
})
export class RegisterButtonsDjComponent implements OnInit {

  constructor(
    private router: Router,
    private declaredJurisdictionCtrl: DeclaredJurisdictionController
  ) { }

  ngOnInit(): void {
  }

  cancelRegister() {
    this.router.navigateByUrl('consulta');
  }

  nextStep() {
    this.declaredJurisdictionCtrl.nextStep();
  }

}
