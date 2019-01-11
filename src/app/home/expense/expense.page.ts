import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Http } from "@angular/http";
import { ExpenseapiService } from "src/app/services/expenseApi/expenseApi.service";
import { Expense } from "src/app/classes/expense";
import { Chart } from 'chart.js';
import { Chartvar } from "src/app/classes/chartvar";
import { ExpensecategoryService } from "src/app/services/expenseapi/expensecategory.service";

@Component({
    selector: 'app-expense',
    templateUrl: './expense.page.html',
    styleUrls: ['./expense.page.scss'],
})
export class ExpensePage implements OnInit {

    // work arround bug ionic
    @ViewChild('expenseListName') expenseListName;

    private doughnutCanvas: ElementRef;
    @ViewChild('doughnutCanvas') set doughnutCanvasContent(content: ElementRef) {
        this.doughnutCanvas = content;
    }

    private barCanvas: ElementRef;
    @ViewChild('barCanvas') set barCanvasContent(content: ElementRef) {
        this.barCanvas = content;
    } 
    // Canvas
    //@ViewChild('barCanvas') barCanvas;


    /**
     * Services
     */
    expenseCategoryApi: ExpensecategoryService;
    expenseApi: ExpenseapiService;


    /**
     * Variables
     */

    expenseList: Expense[];
    chartMode: boolean = false;
    barChart: any;
    justChart: any;
    doughnutChart: any;
    toggleLabelChart: string = "chart";
    toggleLabelList: string = "list";
    barChartMode: boolean = true;
    categoryListNames: string[] = [];
    chartVar: Chartvar = new Chartvar();

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

    ngAfterViewInit() {
        
    }

    // Populate list
    populateExpenseList(): any {
        if (this.expenseApi) {
            this.expenseApi.getExpenseList().subscribe(response => {
                console.log(response)
                this.expenseList = response;
                this.getExpenseListNames(this.expenseList);
                this.chartModeFunction(this.chartVar);
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

    // Chart mode
    chartModeFunction(chartVar: Chartvar) {
        if (this.barChartMode) {
            this.justChart = new Chart(this.barCanvas.nativeElement, {
                type: 'bar',
                data: {
                    labels: chartVar.name,
                    datasets: [{
                        label: '# of expense',
                        data: chartVar.totalAmmount,
                        backgroundColor: chartVar.backgroundColor,
                        borderColor: chartVar.borderColor,
                        borderWidth: chartVar.borderWidth
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }

            });
        } else {
            this.justChart = new Chart(this.doughnutCanvas.nativeElement, {
                type: 'doughnut',
                data: {
                    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                    datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        hoverBackgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56",
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56"
                        ]
                    }]
                }

            });

        }        
    }


    // get expense list names to add in chart
    getExpenseListNames(list) {
        var x = list;
        var listNames = [];
        var listBackgroundColor = [];
        var listBorderColor = [];
        var totalAmmount = [];
        var borderWidth      

        // Group by expense category
        var result = [];
        x.reduce(function (res, value) {
            if (!res[value.category.name] && !res[value.category.backgroundColor] && !res[value.category.borderColor]) {
                res[value.category.name] = { name: value.category.name, total: 0, backgroundColor: value.category.backgroundColor, borderColor: value.category.borderColor, borderWidth: value.category.borderWidth };
                result.push(res[value.category.name])
            }
            res[value.category.name].total += value.ammount;
            return res;
        }, {});
        console.log(result);

        // Push info so chart can understand
        for (var i = 0; result.length > i; i++) {
            if (result[i].name) {
                listNames.push(result[i].name);
                listBackgroundColor.push(result[i].backgroundColor);
                listBorderColor.push(result[i].borderColor);
                borderWidth = result[i].borderWidth;
                totalAmmount.push(result[i].total);
            }
        }
        this.chartVar.name = listNames;
        this.chartVar.backgroundColor = listBackgroundColor;
        this.chartVar.borderColor = listBorderColor;
        this.chartVar.borderWidth = borderWidth;
        this.chartVar.totalAmmount = totalAmmount;
        console.log(this.chartVar);
    }
}
