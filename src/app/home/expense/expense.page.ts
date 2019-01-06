import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from "@angular/http";
import { ExpenseapiService } from "src/app/services/expenseApi/expenseApi.service";
import { Income } from "src/app/classes/income";
import { Expense } from "src/app/classes/expense";
import { List } from '@ionic/angular';

@Component({
    selector: 'app-expense',
    templateUrl: './expense.page.html',
    styleUrls: ['./expense.page.scss'],
})
export class ExpensePage implements OnInit {

    // work arround bug ionic
    @ViewChild('expenseListName') expenseListName: List;

    expenseApi: ExpenseapiService;
    expenseList: Expense[];

    constructor(expenseApi: ExpenseapiService) {
        this.expenseList = [];
        this.expenseApi = expenseApi;
    }

    ngOnInit() {
        this.populateExpenseList();
        console.log(this.expenseList);
    }

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

    deleteExpenseFromList(expense: Expense) {
        this.expenseListName.closeSlidingItems();
        var post = this.expenseApi.deleteExpense(expense._id);
        post.subscribe(x => {
            console.log(x);
            this.populateExpenseList();
        })
        console.log(this.expenseApi);
    }

}
