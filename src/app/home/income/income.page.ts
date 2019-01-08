import { Component, OnInit, ViewChild } from '@angular/core';
import { IncomeapiService } from "src/app/services/incomeapi/incomeapi.service";
import { Income } from "src/app/classes/income";
import { Router } from "@angular/router";

@Component({
  selector: 'app-income',
  templateUrl: './income.page.html',
  styleUrls: ['./income.page.scss'],
})
export class IncomePage implements OnInit {


    // work arround bug ionic
    @ViewChild('incomeListName') incomeListName;

    incomeApi: IncomeapiService;
    income: Income = new Income();
    incomeList: Income[];

    constructor(public router: Router, incomeApi: IncomeapiService) {
        this.incomeList = [];
        this.incomeApi = incomeApi;
    }

    ngOnInit() {
        this.populateIncomeList();
        console.log(this.incomeList);
    }

    // Populate list
    populateIncomeList(): any {
        if (this.incomeApi) {
            this.incomeApi.getIncomeList().subscribe(response => {
                console.log(response)
                this.incomeList = response;
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
