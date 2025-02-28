import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-pensamentos',
  templateUrl: './pensamentos.component.html',
  styleUrls: ['./pensamentos.component.css']
})
export class PensamentosComponent implements OnInit{
  pensamento = {
    conteudo: 'Conteudo para teste',
    autoria: 'Digite o autor',
    modelo: 'modelo1'
  }

  ngOnInit(): void { }

  constructor() { }
}

