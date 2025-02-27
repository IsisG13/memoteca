import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './component/cabecalho/cabecalho.component';
import { FooterComponent } from './component/footer/footer.component';
import { CriarPensamentoComponent } from './component/criar-pensamento/criar-pensamento.component';
import { PensamentoComponent } from './component/pensamento/pensamento.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    FooterComponent,
    CriarPensamentoComponent,
    PensamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
