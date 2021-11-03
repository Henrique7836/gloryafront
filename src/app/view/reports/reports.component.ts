import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CartaoService } from '../../service/cartao.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit, OnDestroy {

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  
  dtTrigger: Subject<any> = new Subject();
  dtOptions: DataTables.Settings = {};
  loading = true;
  lines = [];
  public colums = ["Proxy", "PAM", "Premiado", "CPF", "Empresa", "Credito", "Data Expiração", "Botão"]

  constructor(
    private cartaoService: CartaoService
  ) {
    this.dtOptions = {
      pageLength: 5,
      retrieve: true,
      stateSave: true,
      lengthMenu: [5, 10],
      // columnDefs: [
      //   {
      //     data: 'null',
      //     defaultContent: "<button>Edit</button>",
      //     targets: -1
      //   }
      // ],
      language: {
        url: 'https://cdn.datatables.net/plug-ins/1.10.21/i18n/Portuguese-Brasil.json'
      }
    };
  }

  ngOnInit() {
    this.cartaoService.fetchAll().subscribe(tabelaGlorya => {
      tabelaGlorya.forEach(element => {
        this.lines.push(element);
      });

      this.dtTrigger.next();

    }).add(_ => this.loading = false);
  }

  associarCartao(event) {
    console.log("Associar cartao:",event);
    this.cartaoService.updatePremiado(event[3]).subscribe(x => {
      console.log('XUXA')
      this.rerender();
    })
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      this.lines = [];
      this.cartaoService.fetchAll().subscribe(tabelaGlorya => {
        console.log('XUXA',tabelaGlorya)

        tabelaGlorya.forEach(element => {
          this.lines.push(element);
        });
  
        this.dtTrigger.next();
  
      });
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
