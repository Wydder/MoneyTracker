import { Component, OnInit } from '@angular/core';
import { Income } from "src/app/classes/income";
import { IncomeapiService } from "src/app/services/incomeapi/incomeapi.service";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-editincome',
    templateUrl: './editincome.component.html',
    styleUrls: ['./editincome.component.scss']
})
export class EditincomeComponent implements OnInit {

    income: Income;
    incomeApi: IncomeapiService;
    id: string;


    constructor(incomeApi: IncomeapiService, private route: ActivatedRoute) {
        this.incomeApi = incomeApi;
        this.id = this.route.snapshot.paramMap.get('id');
        console.log(this.id);
        this.getCar();
    }

    ngOnInit() {
    }

    getCar() {
        this.incomeApi.getIncomeData(this.id).subscribe(x => {
            console.log(x)
            this.income = x;
        });
    }

    editIncome(income: Income) {
        this.incomeApi.editIncomePost(this.id, income).subscribe(x => {
            console.log(x);
            this.getCar();
        });
    }

}
