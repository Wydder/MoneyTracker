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
    onAddIncome: EventEmitter<Income> = new EventEmitter();

    incomeModel: Income;
    incomeApi: IncomeapiService;


    constructor(public router: Router, incomeApi: IncomeapiService) {
        this.incomeModel = new Income();
        this.incomeApi = incomeApi;
    }

    ngOnInit() {
    }

    saveIncome(incomeModel: Income) {
        console.log(this.incomeModel);
        this.onAddIncome.emit(this.incomeModel);
        this.router.navigate(['home/expense']);
        this.incomeModel = new Income();
    }

}
