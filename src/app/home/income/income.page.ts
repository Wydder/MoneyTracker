import { Component, OnInit, ViewChild } from '@angular/core';
import { IncomeapiService } from "src/app/services/incomeapi/incomeapi.service";
import { Income } from "src/app/classes/income";
import { List } from '@ionic/angular';

@Component({
  selector: 'app-income',
  templateUrl: './income.page.html',
  styleUrls: ['./income.page.scss'],
})
export class IncomePage implements OnInit {


    // work arround bug ionic
    @ViewChild('incomeListName') incomeListName: List;

    incomeApi: IncomeapiService;
    incomeList: Income[];

    constructor(incomeApi: IncomeapiService) {
        this.incomeList = [];
        this.incomeApi = incomeApi;
    }

    ngOnInit() {
        this.populateIncomeList();
        console.log(this.incomeList);
    }

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

    deleteIncomeFromList(income: Income) {
        this.incomeListName.closeSlidingItems();
        var post = this.incomeApi.deleteIncome(income._id);
        post.subscribe(x => {
            console.log(x);
            this.populateIncomeList();
        })
        console.log(this.incomeApi);
    }

    editIncomeFromList(income: Income) {
        this.incomeListName.closeSlidingItems();
        var post = this.incomeApi.editIncomePost(income._id, income);
        post.subscribe(x => {
            console.log(x);
            this.populateIncomeList();
        })
        console.log(this.incomeApi);
    }

}
