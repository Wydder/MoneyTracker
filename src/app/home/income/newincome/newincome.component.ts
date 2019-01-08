import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from "@angular/router";
import { IncomeapiService } from "src/app/services/incomeapi/incomeapi.service";
import { Income } from "src/app/classes/income";

@Component({
  selector: 'app-newincome',
  templateUrl: './newincome.component.html',
  styleUrls: ['./newincome.component.scss']
})
export class NewincomeComponent implements OnInit {

    @Output()
    onAddIncomeOutput: EventEmitter<Income> = new EventEmitter();

    incomeModel: Income;
    incomeApi: IncomeapiService;


    constructor(public router: Router, incomeApi: IncomeapiService) {
        this.incomeModel = new Income();
        this.incomeApi = incomeApi;
    }

    ngOnInit() {
    }

    saveIncome(incomeModel: Income) {
        this.onAddIncomeOutput.emit(this.incomeModel);
        var post = this.incomeApi.saveIncome(incomeModel);
        post.subscribe(x => {
            console.log(x);
            this.router.navigate(['home/income']);
            this.incomeModel = new Income();
        })
    }

}
