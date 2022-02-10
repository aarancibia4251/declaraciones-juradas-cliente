import { Injectable } from '@angular/core';
import {NzDrawerService} from 'ng-zorro-antd';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {

  constructor(
    private nzDrawerSrv: NzDrawerService
  ) { }

  create(content, options): Promise<boolean> {
    return new Promise<boolean>(((resolve, reject) => {
      const drawer = this.nzDrawerSrv.create({
        nzContent: content,
        ...options
      });
      drawer.afterClose.subscribe(value => resolve(value));
    }));
  }
}
