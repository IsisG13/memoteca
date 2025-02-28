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

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    FooterComponent,
    CriarPensamentoComponent,
    PensamentosComponent,
    ListarPensamentoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
