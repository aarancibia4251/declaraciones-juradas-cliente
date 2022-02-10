import { Component, OnInit } from '@angular/core';
import {NzDrawerRef} from 'ng-zorro-antd';
// @ts-ignore
import { modal, openModal$ } from '@xeiteam/utility-store';

@Component({
  selector: 'app-contractor',
  templateUrl: './contractor.component.html',
  styleUrls: ['./contractor.component.scss']
})
export class ContractorComponent implements OnInit {

  constructor(
    private drawerRef: NzDrawerRef
  ) { }

  ngOnInit(): void {
  }

  close() {
    this.drawerRef.close(false);
  }

  confirm() {
    this.drawerRef.close(true);
    modal(true);
  }

}
