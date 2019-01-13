import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { TabsComponent } from './tabs/tabs.component';
import { AddnewbtnComponent } from './addnewbtn/addnewbtn.component';
import { HeaderComponent } from "src/app/home/header/header.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomePage
            }
        ])
    ],
    exports: [
    ],
    declarations: [HeaderComponent]
})
export class HomePageModule { }
