import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamentos/pensamento.service';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
})
export class CriarPensamentoComponent implements OnInit {

  constructor(
    private service: PensamentoService,
    private router: Router) {}
  ngOnInit(): void {
  }

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
}


  salvar() {
    console.log(this.pensamento)
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['./pensamentos']);
    })
  }

  cancelar() {
    console.log('cancelado')
    this.router.navigate(['./pensamentos']);
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
    // if(this.adicionarPensamento.valid) {
    //   this.router.navigate(['./pensamentos']);
    // } else {
    //   console.log("Preencha todos os campos")
    // }
    // console.log(this.pensamentoCriado);
  // }
}
