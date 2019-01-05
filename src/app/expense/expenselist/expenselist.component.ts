import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expenselist',
  templateUrl: './expenselist.component.html',
  styleUrls: ['./expenselist.component.scss']
})
export class ExpenselistComponent implements OnInit {
    expenseList = ['Test1', 'Test2', 'Test3'];
  constructor() { }

  ngOnInit() {
  }

}
