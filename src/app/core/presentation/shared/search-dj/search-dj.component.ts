import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Constants} from '../../../../common/utils/Constants';

@Component({
  selector: 'app-search-dj',
  templateUrl: './search-dj.component.html',
  styleUrls: ['./search-dj.component.scss']
})
export class SearchDjComponent implements OnInit {
  typeDocs = Constants.TYPES_DOCS;
  @Output() documentDj: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  searchDJ() {
    this.documentDj.emit('345');
  }
}
