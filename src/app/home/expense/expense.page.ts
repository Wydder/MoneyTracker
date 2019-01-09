import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from "@angular/http";
import { ExpenseapiService } from "src/app/services/expenseApi/expenseApi.service";
import { Expense } from "src/app/classes/expense";

@Component({
    selector: 'app-expense',
    templateUrl: './expense.page.html',
    styleUrls: ['./expense.page.scss'],
})
export class ExpensePage implements OnInit {

    // work arround bug ionic
    @ViewChild('expenseListName') expenseListName;

    expenseApi: ExpenseapiService;
    expenseList: Expense[];

    constructor(expenseApi: ExpenseapiService) {
        this.expenseList = [];
        this.expenseApi = expenseApi;
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.expenseListName.closeSlidingItems();
        this.populateExpenseList();
    }

    // Populate list
    populateExpenseList(): any {
        if (this.expenseApi) {
            this.expenseApi.getExpenseList().subscribe(response => {
                console.log(response)
                this.expenseList = response;
            })
        } else {
            console.log('Response is not defined')
        }
    }

    // Add expense
    onAddExpense(expense: Expense) {
        this.populateExpenseList();
    }

    // Delete expense
    deleteExpenseFromList(expense: Expense) {
        this.expenseListName.closeSlidingItems();
        var post = this.expenseApi.deleteExpense(expense._id);
        post.subscribe(x => {
            console.log(x);
            this.populateExpenseList();
        })
        console.log(this.expenseApi);
    }

    // Edit expense
    editExpenseFromList(expense: Expense) {
        this.expenseListName.closeSlidingItems();
        this.populateExpenseList();
    }

}
