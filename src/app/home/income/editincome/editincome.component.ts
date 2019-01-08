import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Income } from "src/app/classes/income";
import { IncomeapiService } from "src/app/services/incomeapi/incomeapi.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-editincome',
    templateUrl: './editincome.component.html',
    styleUrls: ['./editincome.component.scss']
})
export class EditincomeComponent implements OnInit {

    @Output()
    onEditIncomeOutput: EventEmitter<Income> = new EventEmitter();

    income: Income;
    incomeApi: IncomeapiService;
    id: string;


    constructor(incomeApi: IncomeapiService, public router: Router, private route: ActivatedRoute) {
        this.incomeApi = incomeApi;
        this.id = this.route.snapshot.paramMap.get('id');
        console.log(this.id);
        this.getIncome();
    }

    ngOnInit() {
    }

    getIncome() {
        this.incomeApi.getIncomeData(this.id).subscribe(x => {
            console.log(x)
            this.income = x;
        });
    }

    editIncome(income: Income) {
        this.onEditIncomeOutput.emit(this.income);
        this.incomeApi.editIncomePost(this.id, income).subscribe(x => {
            console.log(x);
            this.getIncome();
            this.router.navigate(['home/income']);
        });
    }

}
