import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { mountRootParcel } from 'single-spa';

// @ts-ignore
import * as Root from '@xeiteam/declaraciones-juradas-ui';

@Component({
  selector: 'app-prueba',
  // template: `<div><div>`,
  templateUrl: './prueba.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PruebaComponent implements OnInit {
  config = Root;
  mountRootParcel = mountRootParcel;
  constructor() { }

  ngOnInit(): void {
    console.log(Root, this.config);
  }

  handleError(e) {
    console.log(e);
    return 'error';
  }

}
