import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NewincomeComponent } from './income/newincome/newincome.component';
import { EditincomeComponent } from './income/editincome/editincome.component';
import { FgincomeComponent } from './income/fgincome/fgincome.component';
import { NewexpenseComponent } from './expense/newexpense/newexpense.component';
import { EditexpenseComponent } from './expense/editexpense/editexpense.component';
import { FgexpenseComponent } from './expense/fgexpense/fgexpense.component';
import { HomePage } from "src/app/home/home.page";
import { IncomelistComponent } from './income/incomelist/incomelist.component';
import { ExpenselistComponent } from './expense/expenselist/expenselist.component';
import { HeaderComponent } from "src/app/home/header/header.component";
import { TabsComponent } from "src/app/home/tabs/tabs.component";
import { AddnewbtnComponent } from "src/app/home/addnewbtn/addnewbtn.component";

@NgModule({
    declarations: [AppComponent, HomePage, HeaderComponent, TabsComponent, AddnewbtnComponent , NewincomeComponent, EditincomeComponent, FgincomeComponent, NewexpenseComponent, EditexpenseComponent, FgexpenseComponent, IncomelistComponent, ExpenselistComponent],
    entryComponents: [],
    imports: [BrowserModule, HttpClientModule, HttpModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
    exports: [HeaderComponent],
    providers: [
        HttpClientModule,
        StatusBar,
        SplashScreen,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
