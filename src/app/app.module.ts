import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NewincomeComponent } from './income/newincome/newincome.component';
import { EditincomeComponent } from './income/editincome/editincome.component';
import { FgincomeComponent } from './income/fgincome/fgincome.component';
import { NewexpenseComponent } from './expense/newexpense/newexpense.component';
import { EditexpenseComponent } from './expense/editexpense/editexpense.component';
import { FgexpenseComponent } from './expense/fgexpense/fgexpense.component';

@NgModule({
  declarations: [AppComponent, NewincomeComponent, EditincomeComponent, FgincomeComponent, NewexpenseComponent, EditexpenseComponent, FgexpenseComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
