import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
  styles: [
      `.highlight {
          background-color: yellow;
          font-weight: bold;
      }`
  ]
})
export class DataBindingComponent implements OnInit {

  url = 'http://blabla.com';
  urlImage = 'http://lorempixel.com/400/200/nature';
  cursoAngular = true;
  valorAtual = '';
  valorSalvo = '';
  isMouseOver = false;
  nome: string = 'abc';

  pessoa = {
    nome: 'blabla',
    idade: 123
  };

  constructor() { }

  ngOnInit() {
  }

  getValor() {
    return 1;
  }

  getCurtirCurso(){ return true; }

  bottaoClicado() {
    alert('click');
  }

  onKeyUp(e: KeyboardEvent) {
    console.log((<HTMLInputElement>e.target).value);
    this.valorAtual = (<HTMLInputElement>e.target).value;
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMouseOver(){
    this.isMouseOver = true;
  }

  onMouseOut(){
    this.isMouseOver = false;
  }

}
