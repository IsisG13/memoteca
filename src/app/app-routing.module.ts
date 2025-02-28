import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './component/pensamento/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './component/pensamento/listar-pensamento/listar-pensamento.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'pensamentos'
  },
  {
    path: 'adicionar-pensamento',
    component: CriarPensamentoComponent
  },
  {
    path: 'pensamentos',
    component: ListarPensamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
