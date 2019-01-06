import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Income } from "src/app/classes/income";

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
    deleteIncome: EventEmitter<Income> = new EventEmitter();
    editIncome: EventEmitter<Income> = new EventEmitter();


    constructor() { }

    ngOnInit() {
    }

    deleteIncomeEmitter() {
        this.deleteIncome.emit(this.income);
    }

    editIncomeEmitter() {
        console.log('this should edit');
        this.editIncome.emit(this.income);
    }

}
