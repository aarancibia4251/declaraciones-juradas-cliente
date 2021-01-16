import { Component, OnInit } from '@angular/core';
import {Constants} from '../../../common/utils/Constants';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchDoc = false;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  searchDJ(value) {
    this.router.navigateByUrl('consulta');
  }

}
