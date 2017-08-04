import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cc-check-list-result',
  templateUrl: './check-list-result.component.html',
  styleUrls: ['./check-list-result.component.css']
})
export class CheckListResultComponent implements OnInit {
  @Input() checkedResult: string[];
  @Output() onSelectedToRemoveItem = new EventEmitter<string>();

  constructor() {}

  onRemove(idx) {
    this.onSelectedToRemoveItem.emit(this.checkedResult[idx]);
  }

  ngOnInit() {
  }
}
