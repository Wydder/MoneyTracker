import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ExpenseapiService } from "src/app/services/expenseApi/expenseApi.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Expense } from "src/app/classes/expense";

@Component({
  selector: 'app-editexpense',
  templateUrl: './editexpense.component.html',
  styleUrls: ['./editexpense.component.scss']
})
export class EditexpenseComponent implements OnInit {

    @Output()
    onEditExpenseOutput: EventEmitter<Expense> = new EventEmitter();

    expense: Expense;
    expenseApi: ExpenseapiService;
    id: string;


    constructor(expenseApi: ExpenseapiService, public router: Router, private route: ActivatedRoute) {
        this.expenseApi = expenseApi;
        this.id = this.route.snapshot.paramMap.get('id');
        console.log(this.id);
        this.getExpense();
    }

    ngOnInit() {
    }
    
    getExpense() {
        this.expenseApi.getExpenseData(this.id).subscribe(x => {
            console.log(x)
            this.expense = x;
        });
    }

    editExpense(expense: Expense) {
        this.expenseApi.editExpensePost(this.id, expense).subscribe(x => {
            console.log(x);
            this.getExpense();
            this.router.navigate(['home/expense']);
            this.onEditExpenseOutput.emit(this.expense);
        });
    }

}
