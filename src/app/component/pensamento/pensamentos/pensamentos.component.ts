import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-pensamentos',
  templateUrl: './pensamentos.component.html',
  styleUrls: ['./pensamentos.component.css']
})
export class PensamentosComponent implements OnInit{

  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'A morte do autotune',
    autoria: 'matue',
    modelo: 'modelo2'
  }

  ngOnInit(): void { }

  constructor() { }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }
}

