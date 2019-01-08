import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Expense } from "src/app/classes/expense";
import { Router } from "@angular/router";

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
    deleteExpenseOutput: EventEmitter<Expense> = new EventEmitter();
    editExpenseOutput: EventEmitter<Expense> = new EventEmitter();


    constructor(public router: Router) { }

    ngOnInit() {
    }

    deleteExpenseEmitter() {
        this.deleteExpenseOutput.emit(this.expense);
    }

    editExpenseEmitter(expense: Expense) {
        console.log('this should edit');
        //this.editExpenseOutput.emit(this.expense);
        this.router.navigate(['home/expense/editexpense/' + expense._id]);
    }
    


}
