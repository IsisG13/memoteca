import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent {
  constructor(private router: Router) {}

  adicionar() {
    this.router.navigate(['./adicionar-pensamento']);
  }
}

