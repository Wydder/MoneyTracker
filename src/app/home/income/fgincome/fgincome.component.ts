import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Incomecategory } from 'src/app/classes/incomecategory';
import { IncomecategoryService } from 'src/app/services/incomeapi/incomecategory.service';
import { Income } from "src/app/classes/income";

@Component({
  selector: 'app-fgincome',
  templateUrl: './fgincome.component.html',
  styleUrls: ['./fgincome.component.scss']
})
export class FGincomeComponent implements OnInit {

    // INPUT
    @Input()
    incomeModel: Income;

    // OUTPUT
    @Output()
    incomeFormOutput: EventEmitter<Income> = new EventEmitter();

    categoryList: Incomecategory[] = [];
    incomeCategoryApi: IncomecategoryService;

    constructor(incomeCategoryApi: IncomecategoryService) {
        this.incomeCategoryApi = incomeCategoryApi;
        this.getIncomeCategoryList();
    }

    ngOnInit() {

    }

    logForm() {
        console.log(this.incomeModel)
        this.incomeFormOutput.emit(this.incomeModel)
    }

    getIncomeCategoryList() {
        if (this.incomeCategoryApi) {
            this.incomeCategoryApi.getExpenseCategory().subscribe(response => {
                console.log(response)
                this.categoryList = response;
            })
        }
    }

}
