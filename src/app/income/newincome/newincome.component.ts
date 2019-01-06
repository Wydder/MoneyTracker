import { Component, OnInit } from '@angular/core';
import { Income } from "src/app/classes/income";
import { IncomeapiService } from "src/app/services/incomeapi/incomeapi.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-newincome',
    templateUrl: './newincome.component.html',
    styleUrls: ['./newincome.component.scss']
})
export class NewincomeComponent implements OnInit {

    incomeModel: Income;
    incomeApi: IncomeapiService;

    constructor(public router: Router, incomeApi: IncomeapiService) {
        this.incomeModel = new Income();
        this.incomeApi = incomeApi;
    }

    ngOnInit() {
    }

    saveIncome(incomeModel: Income) {
        var post = this.incomeApi.saveIncome(incomeModel);
        post.subscribe(x => {
            console.log(x);
            console.log(this.router)
            this.router.navigate(['home/income']);
        })
        console.log(this.incomeApi);
        this.incomeModel = new Income();
    }

}
