import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transference',
  templateUrl: './transference.component.html',
  styleUrls: ['./transference.component.scss']
})
export class TransferenceComponent implements OnInit {
  visible: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  openNewDocument() {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

}
