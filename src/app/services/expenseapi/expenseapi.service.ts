import { Injectable } from '@angular/core';
import { Expense } from "src/app/classes/expense";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class ExpenseapiService {

    http: Http;

    headers: any = {
        "content-type": "application/json",
        "x-apikey": "5c30692266292476821c9d02",
        "cache-control": "no-cache"
    }

    urlExpenseList: string = "https://moneytracker-5a2f.restdb.io/rest/expenselist";
    data: string;

    constructor(http: Http) {
        this.http = http;
    }

    getExpenseList(): Observable<Expense[]> {
        var responseObservable = map((response: Response) => {
            return response.json();
        });
        return responseObservable(this.http.get(this.urlExpenseList, { headers: this.headers }))
    }

    saveExpensePost(expenseModel: Expense): Observable<Response> {
        return this.http.post(this.urlExpenseList, expenseModel, { headers: this.headers });
    }

    deleteExpense(id: string): Observable<Response> {
        return this.http.delete(this.urlExpenseList + '/' + id, { headers: this.headers });
    }
}
