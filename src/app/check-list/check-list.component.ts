import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cc-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css']
})
export class CheckListComponent implements OnInit {
  checkList: string[];
  checkedResult: boolean[] = [];
  checkedResultData: string[];

  constructor() {
    this.checkList = [
      'check list one',
      'check list two',
      'check list three',
      'check list four'
    ];
    this.checkList.forEach(() => this.checkedResult.push(false));
  }

  extractCheckedResult() {
    this.checkedResultData = [];
    this.checkedResult.forEach((isChecked, idx) => {
      if(isChecked) {
        this.checkedResultData.push(this.checkList[idx]);
      }
    });
  }
  
  removeCheckedItem(removeItem) {
    this.checkedResult.forEach((ischecked, idx) => {
      if(ischecked && this.checkList[idx] === removeItem) {
        this.checkedResult[idx] = false;
        this.extractCheckedResult();
      }
    })
  }

  ngOnInit() { }
}
