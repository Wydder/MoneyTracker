import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExpensePage } from './expense.page';
import { HeaderComponent } from "src/app/home/header/header.component";
import { ExpenseitemComponent } from './expenseitem/expenseitem.component';
import { NewexpenseComponent } from './newexpense/newexpense.component';
import { EditexpenseComponent } from './editexpense/editexpense.component';
import { FGexpenseComponent } from './fgexpense/fgexpense.component';
import { ChartModule } from 'src/app/charts/chart.module';

const routes: Routes = [
    {
        path: '',
        component: ExpensePage
    },
    {
        path: 'newexpense',
        component: NewexpenseComponent
    },
    {
        path: 'editexpense/:id',
        component: EditexpenseComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),        
        ChartModule
    ],
    declarations: [ExpensePage, ExpenseitemComponent, NewexpenseComponent, EditexpenseComponent, FGexpenseComponent]
})
export class ExpensePageModule { }
