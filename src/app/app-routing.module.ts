import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './component/pensamento/criar-pensamento/criar-pensamento.component';
import { PensamentosComponent } from './component/pensamento/pensamentos/pensamentos.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'adicionar-pensamento'
  },
  {
    path: 'adicionar-pensamento',
    component: CriarPensamentoComponent
  },
  {
    path: 'pensamentos',
    component: PensamentosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
