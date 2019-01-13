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
import { HomePage } from "src/app/home/home.page";
import { HeaderComponent } from "src/app/home/header/header.component";
import { TabsComponent } from "src/app/home/tabs/tabs.component";
import { AddnewbtnComponent } from "src/app/home/addnewbtn/addnewbtn.component";

@NgModule({
    declarations: [AppComponent, HomePage, TabsComponent, AddnewbtnComponent],
    entryComponents: [],
    imports: [BrowserModule, HttpClientModule, HttpModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
    exports: [],
    providers: [
        HttpClientModule,
        StatusBar,
        SplashScreen,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
