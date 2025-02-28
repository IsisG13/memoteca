import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
})
export class CriarPensamentoComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}

  pensamento = {
    id: '1',
    conteudo: 'Isso é serio',
    autoria: 'Matuê',
    modelo: '',
  }

  salvar() {
    console.log(this.pensamento)
    this.router.navigate(['./pensamentos']);
  }

  cancelar() {
    console.log('cancelado')
  }

  // adicionarPensamento!: FormGroup;
  // ngOnInit(): void {
  //   this.pensamentoCriado();
  // }

  // pensamentoCriado() {
  //   this.adicionarPensamento = new FormGroup({
  //     pensamento: new FormGroup(''),
  //     autor: new FormGroup(''),
  //     modelo: new FormGroup(''),
  //   });
  // }

  // salvar() {
  //   if(this.adicionarPensamento.valid) {
  //     this.router.navigate(['./pensamentos']);
  //   } else {
  //     console.log("Preencha todos os campos")
  //   }
  //   console.log(this.pensamentoCriado);
  // }
}
