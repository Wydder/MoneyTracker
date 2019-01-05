import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Incomecategory } from 'src/app/classes/incomecategory';
import { IncomecategoryService } from 'src/app/services/incomeapi/incomecategory.service';
import { Income } from "src/app/classes/income";

@Component({
    selector: 'app-fgincome',
    templateUrl: './fgincome.component.html',
    styleUrls: ['./fgincome.component.scss']
})
export class FgincomeComponent implements OnInit {

    incomeModel: Income;
    categoryList: Incomecategory[] = [];
    incomeCategoryApi: IncomecategoryService;

    constructor(incomeCategoryApi: IncomecategoryService) {
        this.incomeModel = new Income();
        this.incomeCategoryApi = incomeCategoryApi;
        this.getIncomeCategoryList();
        console.log(this.categoryList);
    }

    ngOnInit() {
        
    }

    logForm() {
        console.log(this.incomeModel)
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
