import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Income } from "src/app/classes/income";
import { Router } from "@angular/router";

@Component({
    selector: 'app-incomeitem',
    templateUrl: './incomeitem.component.html',
    styleUrls: ['./incomeitem.component.scss']
})
export class IncomeitemComponent implements OnInit {

    // Input
    @Input()
    income: Income;

    // Output
    @Output()
    deleteIncomeOutput: EventEmitter<Income> = new EventEmitter();
    editIncomeOutput: EventEmitter<Income> = new EventEmitter();


    constructor(public router: Router) { }

    ngOnInit() {
    }

    deleteIncomeEmitter(income: Income) {
        this.deleteIncomeOutput.emit(this.income);
    }

    editIncomeEmitter(income: Income) {
        console.log('this should edit');
        this.router.navigate(['home/income/editincome/' + income._id]);
    }


}
