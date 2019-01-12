import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ExpenseapiService } from "src/app/services/expenseApi/expenseApi.service";
import { Expense } from "src/app/classes/expense";
import { Chartvar } from "src/app/classes/chartvar";
import { ExpensecategoryService } from "src/app/services/expenseapi/expensecategory.service";
import { ChartBuilderService } from 'src/app/charts/services/chart-builder.service';

@Component({
    selector: 'app-expense',
    templateUrl: './expense.page.html',
    styleUrls: ['./expense.page.scss'],
})
export class ExpensePage implements OnInit {

    // work arround bug ionic
    @ViewChild('expenseListName') expenseListName;   

    /**
     * Services
     */

    /**
     * Variables
    **/

    expenseList: Expense[];
    chartMode: boolean = false;
    doughnutChart: any;
    toggleLabelChart: string = "chart";
    toggleLabelList: string = "list";
    barChartMode: boolean = true;
    categoryListNames: string[] = [];
    chartVar: Chartvar = new Chartvar();
    chartType: boolean = false;

    constructor( private expenseApi: ExpenseapiService, private chartService: ChartBuilderService) {
        this.expenseList = [];
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.expenseListName.closeSlidingItems();
        this.populateExpenseList();
    }

    ngAfterViewInit() {
        
    }

    // Populate list
    populateExpenseList(): any {
        if (this.expenseApi) {
            this.expenseApi.getExpenseList().subscribe(response => {
                console.log(response)
                this.expenseList = response;
                this.chartVar = this.chartService.getChartData(this.expenseList);
                console.log(this.chartVar);
                
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
