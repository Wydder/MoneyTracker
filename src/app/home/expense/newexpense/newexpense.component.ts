import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ExpenseapiService } from "src/app/services/expenseapi/expenseapi.service";
import { Expense } from "src/app/classes/expense";
import { Router } from "@angular/router";

@Component({
    selector: 'app-newexpense',
    templateUrl: './newexpense.component.html',
    styleUrls: ['./newexpense.component.scss']
})
export class NewexpenseComponent implements OnInit {

    @Output()
    onAddExpenseOutput: EventEmitter<Expense> = new EventEmitter();


    expenseModel: Expense;
    expenseApi: ExpenseapiService;

    constructor(public router: Router, expenseApi: ExpenseapiService) {
        this.expenseModel = new Expense();
        this.expenseApi = expenseApi;
    }

    ngOnInit() {
    }

    saveExpense(expenseModel: Expense) {
        this.onAddExpenseOutput.emit(this.expenseModel);
        var post = this.expenseApi.saveExpensePost(expenseModel);
        post.subscribe(x => {
            console.log(x);
            this.router.navigate(['home/expense']);
        });
        this.expenseModel = new Expense();
    }

}
