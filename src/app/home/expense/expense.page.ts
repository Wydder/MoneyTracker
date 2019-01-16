import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ExpenseapiService } from "src/app/services/expenseApi/expenseApi.service";
import { Expense } from "src/app/classes/expense";
import { Chartvar } from "src/app/classes/chartvar";
import { ExpensecategoryService } from "src/app/services/expenseapi/expensecategory.service";
import { ChartBuilderService } from 'src/app/charts/services/chart-builder.service';
import { Dateform } from "src/app/classes/dateform";
import { ColorPickerModule } from 'ngx-color-picker';

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
    chartMode: boolean = true;
    doughnutChart: any;
    toggleLabelChart: string = "chart";
    toggleLabelList: string = "list";
    categoryListNames: string[] = [];
    chartVar: Chartvar = new Chartvar();
    chartType: boolean = false;
    listIsReady: boolean;
    title: string;
    dateForm: Dateform;

    constructor(private expenseApi: ExpenseapiService, private chartService: ChartBuilderService) {
        this.title = "Expense list"
        this.expenseList = [];
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.dateForm = new Dateform();
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
                this.listIsReady = true;
                console.log(this.chartVar);
                
            })
        } else {
            console.log('Response is not defined')
        }
    }

    populateExpenseListQ(dateForm: Dateform): any {
        if (this.expenseApi) {
            this.expenseApi.getDataByDate(dateForm.startDate, dateForm.endDate).subscribe(response => {
                console.log(response)
                this.expenseList = response;
                this.chartVar = this.chartService.getChartData(this.expenseList);
                this.listIsReady = true;
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

    chartModeListener(chartModeOn: boolean) {  
        this.chartMode = chartModeOn
    }
}
