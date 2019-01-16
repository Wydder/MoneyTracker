import { Injectable } from '@angular/core';
import { Income } from "src/app/classes/income";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})

export class IncomeapiService {
    http: Http;

    headers: any = {
        "content-type": "application/json",
        "x-apikey": "5c30692266292476821c9d02",
        "cache-control": "no-cache"
    }

    urlIncomeList: string = "https://moneytracker-5a2f.restdb.io/rest/incomelist";
    data: string;

    constructor(http: Http) {
        this.http = http;
    }

    getIncomeList(): Observable<Income[]> {
        var responseObservable = map((response: Response) => {
            return response.json();
        });
        return responseObservable(this.http.get(this.urlIncomeList, { headers: this.headers }))
    }

    deleteIncome(id: string): Observable<Response> {
        return this.http.delete(this.urlIncomeList + '/' + id, { headers: this.headers });
    }

    saveIncome(incomeModel: Income): Observable<Response> {
        return this.http.post(this.urlIncomeList, incomeModel, { headers: this.headers });
    }

    getIncomeData(id: string): Observable<Income> {
        var responseObservable = map((response: Response) => {
            return response.json();
        });
        return responseObservable(this.http.get(this.urlIncomeList + '/' + id, { headers: this.headers }))
    }

    editIncomePost(id: string, income: Income): Observable<Response> {
        return this.http.put(this.urlIncomeList + '/' + id, income, { headers: this.headers });
    }

    getDataByDate(startDate: Date, endDate: Date) {
        var queryUrl = this.urlIncomeList + '?q={"date":{"$gt":{"$date":"' + startDate + '"},"$lt":{"$date":"' + endDate + '"}}}'
        //var queryUrl = encodeURIComponent(queryUrlCoded);
        //var queryUrl = this.urlIncomeList + '?q = { "_created": { "$gt": { "$date": "$currentMonth" } } }'
        var responseObservable = map((response: Response) => {
            return response.json();
        });
        return responseObservable(this.http.get(queryUrl, { headers: this.headers }))
    }


}
