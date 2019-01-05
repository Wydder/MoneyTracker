import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExpensePage } from './expense.page';
import { HeaderComponent } from "src/app/home/header/header.component";

const routes: Routes = [
    {
        path: '',
        component: ExpensePage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [ExpensePage]
})
export class ExpensePageModule { }
