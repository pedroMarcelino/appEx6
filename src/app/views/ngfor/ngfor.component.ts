import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  arrayImg = ['cachorro.jpg', 'golden.jpg', 'huscky.jpg'];
  img: string;


  arrayNomeFilme = ['Brasil', 'Jopao', 'Canada', 'Russia'];
  arrayNotaFilme = ['Brasilia', 'Tokio', 'vancover', 'Moscou'];

  arrayNomes = [];
  nome: string;

  constructor() { }

  ngOnInit(): void {
  }

  exibirNome(img){
    alert(img);
  }
  makeAlert(str){
    alert(str);
  }

  addinArray(nome){
    this.arrayNomes.push(nome) ;
    this.nome = '';
  }
}
