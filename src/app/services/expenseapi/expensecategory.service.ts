import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExpensecategoryService {

  http: Http ;

  headers: any = {
    "content-type": "application/json",
    "x-apikey": "5c30692266292476821c9d02",
    "cache-control": "no-cache"
  }

  expenseCategoryUrl: string = "https://moneytracker-5a2f.restdb.io/rest/expencecategory"

  constructor(http: Http) {
    this.http = http;
  }

  getExpenseCategory() {
    var responseObservable = map((response: Response) => {
      return response.json();
    });
    return responseObservable(this.http.get(this.expenseCategoryUrl, {headers: this.headers}))
  }
}

