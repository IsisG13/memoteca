import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit{

  listaPensamentos = [
    {
      conteudo: 'Hoje tá nevando em Fortal, mudou o clima',
      autoria: 'Matuê - 4TAL',
      modelo: 'modelo1'
    },
    {
      conteudo: 'Welcome to be internet',
      autoria: 'Bo Burnham',
      modelo: 'modelo3'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void { }

  adicionar() {
    this.router.navigate(['./adicionar-pensamento']);
  }
}

