import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './component/pensamento/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './component/pensamento/listar-pensamento/listar-pensamento.component';
import { ExcluirPensamentoComponent } from './component/pensamento/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './component/pensamento/editar-pensamento/editar-pensamento.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'pensamentos',
  },
  {
    path: 'adicionar-pensamento',
    component: CriarPensamentoComponent,
  },
  {
    path: 'pensamentos',
    component: ListarPensamentoComponent,
  },
  {
    path: 'pensamentos/excluirPensamento/:id',
    component: ExcluirPensamentoComponent,
  },
  {
    path: 'pensamentos/editarPensamento/:id',
    component: EditarPensamentoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
