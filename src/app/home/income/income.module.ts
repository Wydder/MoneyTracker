import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IncomePage } from './income.page';
import { IncomeitemComponent } from './incomeitem/incomeitem.component';

const routes: Routes = [
  {
    path: '',
    component: IncomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IncomePage, IncomeitemComponent]
})
export class IncomePageModule {}
