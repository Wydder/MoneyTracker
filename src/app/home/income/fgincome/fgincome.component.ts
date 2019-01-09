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

    @Input()
    submitLabel: string;
    
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
                if(this.incomeModel.category) {
                    var index = this.categoryList.find(x => x.name == this.incomeModel.category.name);
                    this.incomeModel.category = index;
                    console.log(index);
                }
            })
        }
    }

}
