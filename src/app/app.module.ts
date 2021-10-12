import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportsComponent } from './reports/reports.component';
import { AppService } from './service/app/app.service';
import { LayoutService } from './view/layout/layout.service';
import { ViewModule } from './view/view.module';
import { LayoutModule } from './view/layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ViewModule,
    LayoutModule
  ],
  providers: [AppService, LayoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
