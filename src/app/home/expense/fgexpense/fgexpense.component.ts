import { Component, OnInit, EventEmitter } from '@angular/core';
import { Expensecategory } from "src/app/classes/expensecategory";
import { ExpensecategoryService } from "src/app/services/expenseapi/expensecategory.service";
import { Input, Output } from "@angular/core";
import { Expense } from "src/app/classes/expense";

@Component({
    selector: 'app-fgexpense',
    templateUrl: './fgexpense.component.html',
    styleUrls: ['./fgexpense.component.scss']
})
export class FGexpenseComponent implements OnInit {

    // INPUT
    @Input()
    expenseModel: Expense;

    @Input()
    submitLabel: string;

    // OUTPUT
    @Output()
    expenseFormOutput: EventEmitter<Expense> = new EventEmitter();

    categoryList: Expensecategory[] = [];
    expenseCategoryApi: ExpensecategoryService;

    constructor(expenseCategoryApi: ExpensecategoryService) {
        this.expenseCategoryApi = expenseCategoryApi;
        this.getExpenseCategoryList();
    }

    ngOnInit() {

    }

    logForm() {
        console.log(this.expenseModel)
        this.expenseFormOutput.emit(this.expenseModel);
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
