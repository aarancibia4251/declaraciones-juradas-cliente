import { Component, OnInit } from '@angular/core';
import {NzDrawerRef} from 'ng-zorro-antd';

@Component({
  selector: 'app-transference-document',
  templateUrl: './transference-document.component.html',
  styleUrls: ['./transference-document.component.scss']
})
export class TransferenceDocumentComponent implements OnInit {

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
  }

}
