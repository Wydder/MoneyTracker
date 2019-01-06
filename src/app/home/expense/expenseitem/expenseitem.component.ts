import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Expense } from "src/app/classes/expense";

@Component({
  selector: 'app-expenseitem',
  templateUrl: './expenseitem.component.html',
  styleUrls: ['./expenseitem.component.scss']
})
export class ExpenseitemComponent implements OnInit {

    // Input
    @Input()
    expense: Expense;

    // Output
    @Output()
    deleteExpense: EventEmitter<Expense> = new EventEmitter();
    editExpense: EventEmitter<Expense> = new EventEmitter();


    constructor() { }

    ngOnInit() {
    }

    deleteExpenseEmitter() {
        this.deleteExpense.emit(this.expense);
    }

    editExpenseEmitter() {
        console.log('this should edit');
        this.editExpense.emit(this.expense);
    }


}
