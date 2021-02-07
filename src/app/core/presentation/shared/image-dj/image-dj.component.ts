import { Component, OnInit } from '@angular/core';
import {NzUploadFile} from 'ng-zorro-antd';
import {Helpers} from '../../../../common/utils/Helpers';

interface FileDJ {
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
  src: string;
}

@Component({
  selector: 'app-image-dj',
  templateUrl: './image-dj.component.html',
  styleUrls: ['./image-dj.component.scss']
})
export class ImageDjComponent implements OnInit {
  files: FileDJ[] = [];

  ngOnInit() {
  }

  handleInput(file: FileDJ) {
    const sizekiloBytes = parseInt(String(file.size / 1024));
    console.log(sizekiloBytes);
    let img = new Image();
    // @ts-ignore
    img.src = window.URL.createObjectURL(file);
    img.onload = () => {
      if (img.width === 100 && img.height === 100){
        alert('Correct size');
        return true;
      }
      alert('Incorrect size');
      return true;
    };
    this.getImage(file);
  }

  getImage(file) {
    const reader = new FileReader();
    reader.onload = () => {
      const arrayBuffer = reader.result;
      // @ts-ignore
      // @ts-ignore
      const array = new Uint8Array(arrayBuffer);
      const extension = file.name.split('.').reverse()[0];
      const blob = new Blob([array], {type: extension});
      file.src = arrayBuffer;
      this.files.push(file);
    };
    reader.readAsDataURL(file);
  }

}
