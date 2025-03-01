import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './component/cabecalho/cabecalho.component';
import { FooterComponent } from './component/footer/footer.component';
import { CriarPensamentoComponent } from './component/pensamento/criar-pensamento/criar-pensamento.component';
import { PensamentosComponent } from './component/pensamento/pensamentos/pensamentos.component';
import { FormsModule } from '@angular/forms';
import { ListarPensamentoComponent } from './component/pensamento/listar-pensamento/listar-pensamento.component';
import { HttpClientModule } from '@angular/common/http';
import { ExcluirPensamentoComponent } from './component/pensamento/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './component/pensamento/editar-pensamento/editar-pensamento.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    FooterComponent,
    CriarPensamentoComponent,
    PensamentosComponent,
    ListarPensamentoComponent,
    ExcluirPensamentoComponent,
    EditarPensamentoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
