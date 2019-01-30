import { Component, OnInit } from '@angular/core';
import { Income } from "src/app/classes/income";
import { Expense } from "src/app/classes/expense";
import { ExpenseapiService } from "src/app/services/expenseApi/expenseApi.service";
import { ChartBuilderService } from "src/app/charts/services/chart-builder.service";
import { IncomeapiService } from "src/app/services/incomeapi/incomeapi.service";
import { Chartvar } from "src/app/classes/chartvar";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-reports',
    templateUrl: './reports.page.html',
    styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {
    
    incomeList: Income[];
    expenseList: Expense[];
    listIsReady: boolean;
    chartType: boolean = false;
    chartVar: Chartvar;
    startDate: Date;
    endDate: Date;
    title: string = 'Money tracker';


    constructor(private route: ActivatedRoute,private expenseApi: ExpenseapiService, private incomeApi: IncomeapiService, private chartService: ChartBuilderService) {
        
    }

    ngOnInit() {
        
    }

    ionViewWillEnter() {
        this.route.queryParams.subscribe(params => {
            let urlParams = params
            console.log(urlParams);
            if(urlParams.startDate && urlParams.endDate) {
                this.populateReportListQ(urlParams);
            } else {                
                this.populateReportList();
            }
        });
    }

    // Populate list
    populateReportList(): any {
        if (this.incomeApi) {
            this.incomeApi.getIncomeList().subscribe(response => {
                console.log(response)
                this.incomeList = response;
                if (this.expenseApi) {
                    this.expenseApi.getExpenseList().subscribe(response => {
                        console.log(response)
                        this.expenseList = response;
                        this.chartVar = this.chartService.getChartDataReport(this.incomeList, this.expenseList);
                        this.listIsReady = true;
                        console.log(this.chartVar);

                    })
                }
                
            })
        } else {
            console.log('Response is not defined')
        }
    }

    populateReportListQ(dateForm): any {
        if (this.incomeApi) {
            this.incomeApi.getDataByDate(dateForm.startDate, dateForm.endDate).subscribe(response => {
                console.log(response)
                this.incomeList = response;
                if (this.expenseApi) {
                    this.expenseApi.getDataByDate(this.startDate, this.endDate).subscribe(response => {
                        console.log(response)
                        this.expenseList = response;
                        this.chartVar = this.chartService.getChartDataReport(this.incomeList, this.expenseList);
                        this.listIsReady = true;
                        console.log(this.chartVar);

                    })
                }

            })
        } else {
            console.log('Response is not defined')
        }
    }

}
