import { Component, OnInit, ViewChild } from '@angular/core';
import { IncomeapiService } from "src/app/services/incomeapi/incomeapi.service";
import { Income } from "src/app/classes/income";
import { Router } from "@angular/router";
import { Chartvar } from 'src/app/classes/chartvar';
import { ChartBuilderService } from 'src/app/charts/services/chart-builder.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.page.html',
  styleUrls: ['./income.page.scss'],
})
export class IncomePage implements OnInit {


    // work arround bug ionic
    @ViewChild('incomeListName') incomeListName;

    income: Income = new Income();
    
    
    /**
     * Variables
    **/    
    incomeList: Income[];
    chartMode: boolean = false;
    doughnutChart: any;
    toggleLabelChart: string = "chart";
    toggleLabelList: string = "list";
    barChartMode: boolean = true;
    categoryListNames: string[] = [];
    chartVar: Chartvar = new Chartvar();
    chartType: boolean = false;

    constructor(public router: Router, private incomeApi: IncomeapiService,  private chartService: ChartBuilderService) {
        this.incomeList = [];
    }

    ngOnInit() {
        this.populateIncomeList();
        console.log(this.incomeList);
    }

    ionViewWillEnter() {
        this.incomeListName.closeSlidingItems();
        this.populateIncomeList();
    }

    // Populate list
    populateIncomeList(): any {
        if (this.incomeApi) {
            this.incomeApi.getIncomeList().subscribe(response => {
                console.log(response)
                this.incomeList = response;
                this.chartVar = this.chartService.getChartData(this.incomeList);
                console.log(this.chartVar);
            })
        } else {
            console.log('Response is not defined')
        }
    }

    // Add Income
    addIncome(income: Income) {
        this.populateIncomeList();        
    }


    // Delete income
    deleteIncomeFromList(income: Income) {
        this.incomeListName.closeSlidingItems();
        var post = this.incomeApi.deleteIncome(income._id);
        post.subscribe(x => {
            console.log(x);
            this.populateIncomeList();
        })
        console.log(this.incomeApi);
    }


    // Edit income
    editIncomeFromList(income: Income) {
        this.incomeListName.closeSlidingItems();
        this.populateIncomeList();
    }

}
