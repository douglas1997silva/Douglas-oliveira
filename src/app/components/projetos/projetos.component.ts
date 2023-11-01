import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-projetos',

  styleUrls: ['./projetos.component.css'],
  template:`
  <h2>Projetos: </h2>
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
    //projeto 1
    {

      titles: 'progBOOKS',
      img: '../../../assets/progBOOKS.png',
      linkDeploy: 'https://prog-book.vercel.app/',
      linkGithub: 'https://github.com/douglas1997silva/ProgBook',
      tecnologias: [
        { nome: 'HTML', imagem: '../../../assets/html-5.png' },
        { nome: 'CSS', imagem: '../../../assets/css-3.png' },
      ],
      textprojetos: 'Criei um site com HTML, CSS e JavaScript para uma Biblioteca de Livros Dev. Apresenta um menu "hamburguer" e um slide para exibir informações sobre os livros em destaque. Não utiliza banco de dados. Destaca minhas habilidades em front-end web development.',
    },
    //projeto 2
    {
      titles: 'Meteora',
      img: '../../../assets/meteoro.png',
      linkDeploy: 'https://brootrap.vercel.app/',
      linkGithub: 'https://github.com/douglas1997silva/Meteora',
      tecnologias: [
        { nome: 'HTML', imagem: '../../../assets/html-5.png' },
        { nome: 'CSS', imagem: '../../../assets/css-3.png' },
        {nome: 'bootstrap', imagem: '../../../assets/bootstrap.png'}
      ],
      textprojetos: 'Desenvolvi uma loja online com HTML, CSS e Bootstrap. Este site oferece uma plataforma de compras responsiva para produtos diversos. Os clientes podem explorar itens, visualizar detalhes e concluir compras de maneira eficiente. Destaca minhas habilidades em design de lojas virtuais.',
    },
    //projeto 3
    {
      titles: ' WebTempo',
      img: '../../../assets/webtempo.png',
      linkDeploy: 'https://webtempo.vercel.app/',
      linkGithub: 'https://github.com/douglas1997silva/webtempo',
      tecnologias: [
        { nome: 'HTML', imagem: '../../../assets/html-5.png' },
        { nome: 'CSS', imagem: '../../../assets/css-3.png' },
        {nome: 'javaScript', imagem: '../../../assets/js.png'}
      ],
      textprojetos: 'Criei um aplicativo de previsão do clima que fornece informações meteorológicas personalizadas com base na localização do usuário. Utilizando HTML, CSS e JavaScript, o aplicativo oferece dados atualizados sobre o clima, como temperatura, condições climáticas e previsões.',
    },
    //projeto 4
    {
      titles: ' Mochila de Viajem',
      img: '../../../assets/mochiladeviajem.png',
      linkDeploy: 'https://mochila-de-viagem-lemon.vercel.app/',
      linkGithub: 'https://github.com/douglas1997silva/Mochila-de-viagem',
      tecnologias: [
        { nome: 'HTML', imagem: '../../../assets/html-5.png' },
        { nome: 'CSS', imagem: '../../../assets/css-3.png' },
        {nome: 'javaScript', imagem: '../../../assets/js.png'}
      ],
      textprojetos: 'Criei uma "Mochila de Viagem" com HTML, CSS e JavaScript, utilizando o localStorage. Agora é possível adicionar e manter itens na mochila, mesmo após fechar o navegador, garantindo que nunca sejam perdidos. Destaco minhas habilidades em desenvolver soluções práticas para viajantes.',
    },
    //projeto 4
    {
      titles: 'Formulario',
      img: '../../../assets/formulario.png',
      linkDeploy: 'https://validando-formulario-nu.vercel.app/pages/abrir-conta-form.html',
      linkGithub: 'https://github.com/douglas1997silva/Validando-formulario',
      tecnologias: [
        { nome: 'HTML', imagem: '../../../assets/html-5.png' },
        { nome: 'CSS', imagem: '../../../assets/css-3.png' },
        {nome: 'javaScript', imagem: '../../../assets/js.png'}
      ],
      textprojetos: 'Desenvolvi um formulário para um site de banco utilizando HTML, CSS e JavaScript. Implementei recursos de detecção de erros, ajudando os usuários a evitar equívocos ao preencher informações sensíveis. Esse projeto destaca minha habilidade em melhorar a usabilidade e segurança em formulários online.',
    },
    //projeto 5
    {
      titles: 'Formulario',
      img: '../../../assets/formulario.png',
      linkDeploy: 'https://validando-formulario-nu.vercel.app/pages/abrir-conta-form.html',
      linkGithub: 'https://github.com/douglas1997silva/Validando-formulario',
      tecnologias: [
        { nome: 'HTML', imagem: '../../../assets/html-5.png' },
        { nome: 'CSS', imagem: '../../../assets/css-3.png' },
        {nome: 'javaScript', imagem: '../../../assets/js.png'}
      ],
      textprojetos: 'Desenvolvi um formulário para um site de banco utilizando HTML, CSS e JavaScript. Implementei recursos de detecção de erros, ajudando os usuários a evitar equívocos ao preencher informações sensíveis. Esse projeto destaca minha habilidade em melhorar a usabilidade e segurança em formulários online.',
    },
    // Outros projetos
  ];



  constructor(

  ) {}

  ngOnInit(): void {





}
}
