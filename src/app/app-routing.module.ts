import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from "src/app/home/home.page";

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
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
