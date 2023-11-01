import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-projetos',

  styleUrls: ['./projetos.component.css'],
  template:`
  <div class="card-group">
    <article class="card" *ngFor="let projeto of projetos">
      <h3>{{ projeto.titles }}</h3>
      <img [src]="projeto.img" [alt]="projeto.titles" class="card-imgem">
      <div class="habilidade-projetos">
        <ul class="lista-card">
          <li>
            <i class="fi fi-rs-table-tree"></i>
            <a [href]="projeto.linkDeploy" target="_blank">Deploy</a>
          </li>
          <li>
            <i class="fi fi-brands-github"></i>
            <a [href]="projeto.linkGithub" target="_blank">Repositorio</a>
          </li>
        </ul>
        <ul class="lista-hab">
          <li *ngFor="let tecnologia of projeto.tecnologias">
            <a class="btn-hab bounceIn">
              <img class="hab" [src]="tecnologia.imagem" [alt]="tecnologia.nome">
            </a>
          </li>
        </ul>
        <p>{{ projeto.textprojetos }}</p>
      </div>
    </article>
  </div>
`,

})
export class ProjetosComponent implements OnInit {
  projetos = [
    {
      titles: 'progBOOKS',
      img: '../../../assets/progBOOKS.png',
      linkDeploy: 'https://seu-link-deploy-1.com',
      linkGithub: 'https://seu-link-repositorio-1.com',
      tecnologias: [
        { nome: 'HTML', imagem: '../../../assets/html-5.png' },
        { nome: 'CSS', imagem: '../../../assets/css-3.png' },
      ],
      textprojetos: 'Descrição do Projeto 1',
    },
    {
      titles: 'Projeto 2',
      img: 'caminho-para-imagem-projeto2.jpg',
      linkDeploy: 'https://seu-link-deploy-2.com',
      linkGithub: 'https://seu-link-repositorio-2.com',
      tecnologias: [
        { nome: 'Angular', imagem: 'caminho-para-imagem-angular.jpg' },
        { nome: 'JavaScript', imagem: 'caminho-para-imagem-js.jpg' },
      ],
      textprojetos: 'Descrição do Projeto 2',
    },
    // Outros projetos
  ];



  constructor(

  ) {}

  ngOnInit(): void {





}
}
