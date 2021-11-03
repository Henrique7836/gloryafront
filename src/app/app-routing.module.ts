import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportsComponent } from './view/reports/reports.component';
import { Layout1FlexComponent } from './view/layout/layout-1-flex/layout-1-flex.component';
import { CadastrarPremiadoComponent } from './view/cadastrar-premiado/cadastrar-premiado.component';
import { CadastrarEmpresaComponent } from './view/cadastrar-empresa/cadastrar-empresa.component';
import { CadastrarCartaoComponent } from './view/cadastrar-cartao/cadastrar-cartao.component';


const routes: Routes = [
  {
    path: '', component: Layout1FlexComponent, children: [
      { path: '', component: ReportsComponent },
    ]
  },
  {
    path: 'cadastrar-empresa', component: Layout1FlexComponent, children: [
      { path: '', component: CadastrarEmpresaComponent },
    ]
  },
  {
    path: 'cadastrar-cartao', component: Layout1FlexComponent, children: [
      { path: '', component: CadastrarCartaoComponent },
    ]
  },
  {
    path: 'cadastrar-premiado', component: Layout1FlexComponent, children: [
      { path: '', component: CadastrarPremiadoComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
