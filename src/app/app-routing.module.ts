import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewincomeComponent } from './income/newincome/newincome.component';
import { FgincomeComponent } from './income/fgincome/fgincome.component';
import { NewexpenseComponent } from './expense/newexpense/newexpense.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'addincome', component: NewincomeComponent },
  { path: 'addexpense', component: NewexpenseComponent },
  // Test purpose
  { path: 'test', component: FgincomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
