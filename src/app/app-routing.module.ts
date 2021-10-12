import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportsComponent } from './reports/reports.component';
import { Layout1FlexComponent } from './view/layout/layout-1-flex/layout-1-flex.component';


const routes: Routes = [  
  {  path: '', component: Layout1FlexComponent, children:[
  { path: '', component: ReportsComponent },
] }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
