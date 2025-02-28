import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-pensamentos',
  templateUrl: './pensamentos.component.html',
  styleUrls: ['./pensamentos.component.css']
})
export class PensamentosComponent implements OnInit{

  @Input() pensamento = {
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  ngOnInit(): void { }

  constructor() { }
}

