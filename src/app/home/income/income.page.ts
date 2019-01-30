import { Component, OnInit, ViewChild } from '@angular/core';
import { IncomeapiService } from "src/app/services/incomeapi/incomeapi.service";
import { Income } from "src/app/classes/income";
import { Router, ActivatedRoute } from "@angular/router";
import { Chartvar } from 'src/app/classes/chartvar';
import { ChartBuilderService } from 'src/app/charts/services/chart-builder.service';
import { Dateform } from "src/app/classes/dateform";
import { ColorPickerModule } from 'ngx-color-picker';
import { CategoryListService } from "src/app/common-components/services/category-list.service";
import { Incomecategory } from "src/app/classes/incomecategory";

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
    chartMode: boolean = true;
    doughnutChart: any;
    toggleLabelChart: string = "chart";
    toggleLabelList: string = "list";
    barChartMode: boolean = true;
    categoryList: Incomecategory[];
    chartVar: Chartvar = new Chartvar();
    chartType: boolean = false;
    listIsReady: boolean;
    title: string;
    dateForm: Dateform;
    slideOpts = {}
    border: any;

    constructor(private route: ActivatedRoute, public router: Router, private incomeApi: IncomeapiService, private chartService: ChartBuilderService, private categoryListService: CategoryListService) {
        this.title = "Income list";
        this.dateForm = new Dateform();
        this.slideOpts = {
            
        };
        this.incomeList = [];
    }

    ngOnInit() {

    }

    ionViewWillEnter() {
        this.route.queryParams.subscribe(params => {
            let urlParams = params
            console.log(urlParams);
            if(urlParams.startDate && urlParams.endDate) {
                this.populateIncomeListQ(urlParams);
            } else {                
                this.populateIncomeList();
            }
            this.incomeListName.closeSlidingItems();
        });

    }

    

    // Populate list
    populateIncomeList(): any {
        if (this.incomeApi) {
            this.incomeApi.getIncomeList().subscribe(response => {
                console.log(response)
                this.incomeList = response;
                this.chartVar = this.chartService.getChartData(this.incomeList);
                this.categoryList = this.categoryListService.generateCategoryList(this.incomeList);
                this.listIsReady = true;
            })
        } else {
            console.error('Response is not defined')
        }
    }

    populateIncomeListQ(dateForm): any {
        if (this.incomeApi) {
            this.incomeApi.getDataByDate(dateForm.startDate, dateForm.endDate).subscribe(response => {
                console.log(response)
                this.incomeList = response;
                this.chartVar = this.chartService.getChartData(this.incomeList);
                this.listIsReady = true;
            })
        } else {
            console.error('Response is not defined')
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

    chartModeListener(chartModeOn: boolean) {
        this.chartMode = chartModeOn
    }

}
