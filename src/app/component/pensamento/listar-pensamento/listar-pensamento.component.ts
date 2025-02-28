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
      conteudo: 'Just nod or shake your head and we will do the rest',
      autoria: 'Bo Burnham',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Diuretics paradis num copo é motivis de denguis. Atirei o pau no gatis, per gatis num morreus. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Sapien in monti palavris qui num significa nadis i pareci latim.',
      autoria: 'Autor',
      modelo: 'modelo2'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void { }

  adicionar() {
    this.router.navigate(['./adicionar-pensamento']);
  }
}

