import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Incomecategory } from 'src/app/classes/incomecategory';
import { IncomecategoryService } from 'src/app/services/incomeapi/incomecategory.service';

@Component({
  selector: 'app-fgincome',
  templateUrl: './fgincome.component.html',
  styleUrls: ['./fgincome.component.scss']
})
export class FgincomeComponent implements OnInit {
  
  categoryList: Incomecategory[] = [];
  incomeCategoryApi: IncomecategoryService;

  constructor(incomeCategoryApi: IncomecategoryService) {

    this.incomeCategoryApi = incomeCategoryApi;
  }

  ngOnInit() {
    this.getIncomeCategoryList();
    var test = this.getIncomeCategoryList();
    console.log(test)
  }

  logForm() {
    console.log('Hahaha productions')
  }

  getIncomeCategoryList() {
    if(this.incomeCategoryApi) {
      this.incomeCategoryApi.getExpenseCategory().subscribe(response => {
        console.log(response)
        this.categoryList = response;
      })
    }
  }

}
