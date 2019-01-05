import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewincomeComponent } from './income/newincome/newincome.component';
import { FgincomeComponent } from './income/fgincome/fgincome.component';
import { NewexpenseComponent } from './expense/newexpense/newexpense.component';
import { HomePage } from "src/app/home/home.page";
import { IncomelistComponent } from "src/app/income/incomelist/incomelist.component";
import { ExpenselistComponent } from "src/app/expense/expenselist/expenselist.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home/reports',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomePage,
        children: [
            {
                path: 'income',
                children: [
                    {
                        path: '',
                        loadChildren: './home/income/income.module#IncomePageModule'
                    }
                ]

            },
            {
                path: 'expense',
                children: [
                    {
                        path: '',
                        loadChildren: './home/expense/expense.module#ExpensePageModule'
                    }
                ]
            },
            {
                path: 'reports',
                children: [
                    {
                        path: '',
                        loadChildren: './home/reports/reports.module#ReportsPageModule'
                    }
                ]
            }
        ]
    },
    {
        path: 'home/income',
        component: IncomelistComponent
    },
    {
        path: 'home/expense',
        component: ExpenselistComponent
    },
    {
        path: 'addincome',
        component: NewincomeComponent
    },
    {
        path: 'addexpense',
        component: NewexpenseComponent
    },
    // Test purpose
    {
        path: 'test',        component: FgincomeComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
