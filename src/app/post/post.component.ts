import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  pessoas = [
    { nome: 'Leo', mensagem: 'Sucesso demais' },
    { nome: 'Davi', mensagem: 'Men, saudades da BAHIAA' },
    { nome: 'Alan', mensagem: 'Eu só quero ver minha mãe' },
    { nome: 'Samuel', mensagem: 'É OQ MAHHH!' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
