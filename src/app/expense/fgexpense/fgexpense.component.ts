import { Component, OnInit } from '@angular/core';
import { Expensecategory } from "src/app/classes/expensecategory";
import { ExpensecategoryService } from "src/app/services/expenseapi/expensecategory.service";

@Component({
    selector: 'app-fgexpense',
    templateUrl: './fgexpense.component.html',
    styleUrls: ['./fgexpense.component.scss']
})
export class FgexpenseComponent implements OnInit {

    categoryList: Expensecategory[] = [];
    expenseCategoryApi: ExpensecategoryService;

    constructor(expenseCategoryApi: ExpensecategoryService) {
        this.expenseCategoryApi = expenseCategoryApi;
        this.getExpenseCategoryList();
    }

    ngOnInit() {

    }

    logForm() {
        console.log('Hahaha productions')
    }

    getExpenseCategoryList() {
        if (this.expenseCategoryApi) {
            this.expenseCategoryApi.getExpenseCategory().subscribe(response => {
                console.log(response)
                this.categoryList = response;
            })
        }
    }

}
