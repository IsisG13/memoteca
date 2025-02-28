import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit{

  listaPensamentos: Pensamento[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void { }

  adicionar() {
    this.router.navigate(['./adicionar-pensamento']);
  }
}

