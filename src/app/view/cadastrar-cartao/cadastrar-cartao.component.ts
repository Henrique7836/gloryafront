import { Component, OnInit } from '@angular/core';
import { CartaoService } from 'src/app/service/cartao.service';
import { PremiadoService } from 'src/app/service/premiado.service';

@Component({
  selector: 'app-cadastrar-cartao',
  templateUrl: './cadastrar-cartao.component.html',
  styleUrls: ['./cadastrar-cartao.component.scss']
})
export class CadastrarCartaoComponent implements OnInit {

  public PAM:string;
  public dataExpiracao:string;
  public valor:number;
  listaPremiados = [];
  selectedPremiado: any;
  premiado: any;

  constructor(
    private cartaService: CartaoService,
    private premiadoService: PremiadoService
  ) { }

  ngOnInit() {
    this.premiadoService.fetchAll().subscribe(premiados => {
      console.log("PREMIADOS",premiados)
      premiados.forEach(x => {
        this.listaPremiados.push(x)
      })
    })
  }

  salvar() {
    let cartao = {credito: this.valor, dataExpiracao: this.dataExpiracao, pam: this.PAM};
    console.log("Premiado",cartao)
    console.log("CARTAO A SALVAR",cartao)

    this.cartaService.save(cartao).subscribe(x => {
      console.log("CARTAO SAVE",x)
    }, err => {
      console.log(err)
    })
  }

}
