import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ExpensePage } from './expense.page';
import { ExpenseitemComponent } from './expenseitem/expenseitem.component';
import { NewexpenseComponent } from './newexpense/newexpense.component';
import { EditexpenseComponent } from './editexpense/editexpense.component';
import { FGexpenseComponent } from './fgexpense/fgexpense.component';
import { ChartModule } from 'src/app/charts/chart.module';
import { HomePageModule } from "src/app/home/home.module";
import { CommonComponentsModule } from "src/app/common-components/common-components.module";
import { ColorPickerModule } from "ngx-color-picker/dist";

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
        ChartModule,
        CommonComponentsModule,
        ColorPickerModule
    ],
    declarations: [ExpensePage, ExpenseitemComponent, NewexpenseComponent, EditexpenseComponent, FGexpenseComponent]
})
export class ExpensePageModule { }
