import { Injectable } from '@angular/core';
import { Chartvar } from 'src/app/classes/chartvar';

@Injectable({
    providedIn: 'root'
})
export class ChartBuilderService {

    constructor() {

    }

    // get list names to add in chart
    getChartData(list): Chartvar {
        var x = list;
        var listNames = [];
        var listBackgroundColor = [];
        var listBorderColor = [];
        var totalAmmount = [];
        var borderWidth

        // Group by category
        var result = [];
        x.reduce(function (res, value) {
            if (!res[value.category.name] && !res[value.category.backgroundColor] && !res[value.category.borderColor]) {
                res[value.category.name] = { name: value.category.name, total: 0, backgroundColor: value.category.backgroundColor, borderColor: value.category.borderColor, borderWidth: value.category.borderWidth };
                result.push(res[value.category.name])
            }
            res[value.category.name].total += value.ammount;
            return res;
        }, {});
        console.log(result);

        // Push info so chart can understand
        for (var i = 0; result.length > i; i++) {
            if (result[i].name) {
                listNames.push(result[i].name);
                listBackgroundColor.push(result[i].backgroundColor);
                listBorderColor.push(result[i].borderColor);
                borderWidth = result[i].borderWidth;
                totalAmmount.push(result[i].total);
            }
        }
        var chartVar = new Chartvar();

        chartVar.name = listNames;
        chartVar.backgroundColor = listBackgroundColor;
        chartVar.borderColor = listBorderColor;
        chartVar.borderWidth = borderWidth;
        chartVar.totalAmmount = totalAmmount;
        console.log(chartVar);

        return chartVar;
    }

    getChartDataReport(listI, listE) {        
        var listNames = ['Income', 'Expense'];
        listNames.push();
        listNames.push();
        var listBackgroundColor = ['rgba(49, 113, 224, 0.7)', 'rgba(193, 3, 3, 0.7)'];
        var listBorderColor = ['rgba(49, 113, 224, 1)', 'rgba(193, 3, 3, 1)'];
        var totalAmmount = [];
        var borderWidth

        // Push info so chart can understand
        var totalIncome = 0
        for (var i = 0; listI.length > i; i++) {
            totalIncome += listI[i].ammount
        }
        console.log(totalIncome);


        var totalExpense = 0;
        for (var i = 0; listE.length > i; i++) {
            totalExpense += listE[i].ammount
        }
        console.log(totalExpense);        
        var chartVar = new Chartvar();
        totalAmmount.push(totalIncome);
        totalAmmount.push(totalExpense);
        chartVar.name = listNames;
        chartVar.backgroundColor = listBackgroundColor;
        chartVar.borderColor = listBorderColor;
        chartVar.borderWidth = 1;
        chartVar.totalAmmount = totalAmmount;
        console.log(chartVar);

        return chartVar;
    }
}
