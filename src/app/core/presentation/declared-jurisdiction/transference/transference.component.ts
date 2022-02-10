import { Component, OnInit } from '@angular/core';
import {DrawerService} from '../../../../common/services/drawer.service';
import {TransferenceDocumentComponent} from './transference-document/transference-document.component';
import {ContractorComponent} from './contractor/contractor.component';

@Component({
  selector: 'app-transference',
  templateUrl: './transference.component.html',
  styleUrls: ['./transference.component.scss']
})
export class TransferenceComponent implements OnInit {
  visible: boolean;
  drawContractor: boolean;
  constructor(
    private drawerSrv: DrawerService
  ) { }

  ngOnInit(): void {
  }

  async openNewDocument() {
    const value = await this.drawerSrv.create(TransferenceDocumentComponent, {
      nzWidth: 550
    });
  }

  async openNewContractor() {
    const value = await this.drawerSrv.create(ContractorComponent, {
      nzWidth: 550
    });
  }

  close(): void {
    this.visible = false;
  }

}
