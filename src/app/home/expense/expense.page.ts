import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Http } from "@angular/http";
import { ExpenseapiService } from "src/app/services/expenseApi/expenseApi.service";
import { Expense } from "src/app/classes/expense";
import { Chart } from 'chart.js';

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

    expenseApi: ExpenseapiService;
    expenseList: Expense[];
    chartMode: boolean = false;
    barChart: any;
    justChart: any;
    doughnutChart: any;
    toggleLabelChart: string = "chart";
    toggleLabelList: string = "list";
    barChartMode: boolean = true;
    categoryListNames: string[] = [];

    constructor(expenseApi: ExpenseapiService) {
        this.expenseList = [];
        this.expenseApi = expenseApi;
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.expenseListName.closeSlidingItems();
        this.populateExpenseList();
        this.chartModeFunction(this.categoryListNames);
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
    chartModeFunction(labels) {
        if (this.barChartMode) {
            this.justChart = new Chart(this.barCanvas.nativeElement, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3, 5],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(255,99,132,1)',
                        ],
                        borderWidth: 1
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
        var me = this;
        var listNames = [];

        for (var i = 0; x.length > i; i++) {
            console.log(x[i].name);
            listNames.push(x[i].name);
            console.log(listNames);
        }
        this.categoryListNames = listNames;
    }
}
