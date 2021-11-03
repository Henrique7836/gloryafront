import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarPremiadoComponent } from './cadastrar-premiado/cadastrar-premiado.component';
import { CadastrarCartaoComponent } from './cadastrar-cartao/cadastrar-cartao.component';
import { CadastrarEmpresaComponent } from './cadastrar-empresa/cadastrar-empresa.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CadastrarPremiadoComponent, CadastrarCartaoComponent, CadastrarEmpresaComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ViewModule { }
