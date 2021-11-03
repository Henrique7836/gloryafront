import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportsComponent } from './view/reports/reports.component';
import { AppService } from './service/app/app.service';
import { LayoutService } from './view/layout/layout.service';
import { ViewModule } from './view/view.module';
import { LayoutModule } from './view/layout/layout.module';
import { CartaoService } from './service/cartao.service';
import { Gateway } from './helper/gateway';
import { DataTablesModule } from 'angular-datatables';
import { PremiadoService } from './service/premiado.service';
import { EmpresaService } from './service/empresa.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ViewModule,
    LayoutModule,
    DataTablesModule,
    FormsModule
  ],
  providers: [AppService, LayoutService, CartaoService, Gateway, PremiadoService, EmpresaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
