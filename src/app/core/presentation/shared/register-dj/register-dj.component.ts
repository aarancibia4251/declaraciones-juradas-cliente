import { Component, OnInit } from '@angular/core';
import {Strings} from '../../../../../utils/Strings';

@Component({
  selector: 'app-register-dj',
  templateUrl: './register-dj.component.html',
  styleUrls: ['./register-dj.component.scss']
})
export class RegisterDjComponent implements OnInit {
  title = Strings.NEW_DECLARED_JURISDICTION;
  constructor() { }

  ngOnInit(): void {
  }

}
