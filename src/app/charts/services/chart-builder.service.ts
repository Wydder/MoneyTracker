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
}
