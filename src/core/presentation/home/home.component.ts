import { Component, OnInit } from '@angular/core';
import {Constants} from '../../../utils/Constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchDoc = false;
  constructor() { }

  ngOnInit(): void {
  }

  searchDJ(value) {
    this.searchDoc = true;
  }

}
