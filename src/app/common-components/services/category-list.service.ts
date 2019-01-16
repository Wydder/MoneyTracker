import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryListService {

    constructor() { }

    generateCategoryList(list) {
        var categoryList = [];
        for (let i = 0; list.length > i; i++) {
            categoryList.push(list[i].category);
        }
        return categoryList
    }
}
