import { Component, Input, OnInit  } from '@angular/core';




@Component({
  selector: 'app-projetos',

  styleUrls: ['./projetos.component.css'],
  template:`
  <h2>Projetos: </h2>
  <div class="card-group animacao " >
    <article class="card   " *ngFor="let projeto of projetosExibidos">
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
  <div class="container-btn">
  <button class="btn-mais" (click)="carregarMaisProjetos()">Carregar Mais</button>
</div>

`,

})
export class ProjetosComponent implements OnInit {
  projetos: any[] = [
    //projeto 1
    {
      id:'0',
      titles: ' Portifolio',
      img: '../../../assets/portiforio.png',
      linkDeploy: '',
      linkGithub: 'https://github.com/douglas1997silva/Portifolio-Angular',
      tecnologias: [
        { nome: 'HTML', imagem: '../../../assets/html-5.png' },
        { nome: 'CSS', imagem: '../../../assets/css-3.png' },
        { nome: 'TYPESCRIPT', imagem: '../../../assets/typescript.png' },
        {nome: 'Angular', imagem: '../../../assets/angular.png'}
      ],
      textprojetos: 'Criei um aplicativo de previsão do clima que fornece informações meteorológicas personalizadas com base na localização do usuário. Utilizando HTML, CSS e JavaScript, o aplicativo oferece dados atualizados sobre o clima, como temperatura, condições climáticas e previsões.',
    },
    //projeto 1
    {
      id:'0',
      titles: ' Blog "ONE Pience"',
      img: '../../../assets/blogone.png',
      linkDeploy: 'https://angular-blog-eight-sable.vercel.app/',
      linkGithub: 'https://github.com/douglas1997silva/angular-blog',
      tecnologias: [
        { nome: 'HTML', imagem: '../../../assets/html-5.png' },
        { nome: 'CSS', imagem: '../../../assets/css-3.png' },
        { nome: 'TYPESCRIPT', imagem: '../../../assets/typescript.png' },
        {nome: 'Angular', imagem: '../../../assets/angular.png'}
      ],
      textprojetos: 'Este projeto em andamento é um exemplo impressionante de minha habilidade em desenvolvimento web, onde combinei meu amor por "One Piece" com minha experiência em Angular para criar um blog dedicado a esta icônica série de anime e mangá. O blog apresenta uma interface de usuário atraente e interativa, projetada com um foco especial na tripulação dos Piratas do Chapéu de Palha.',
    },
    {
      id:'0',
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
    //projeto 2
    {
      id:'1',
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
    //projeto 3
    {
      id:'2',
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
    //projeto 4
    {
      id:'3',
      titles: 'JOGO acerte o Numero',
      img: '../../../assets/numero-secreto.png',
      linkDeploy: 'https://numero-secreto-xi-six.vercel.app/',
      linkGithub: 'https://github.com/douglas1997silva/Numero-secreto',
      tecnologias: [
        { nome: 'HTML', imagem: '../../../assets/html-5.png' },
        { nome: 'CSS', imagem: '../../../assets/css-3.png' },
        {nome: 'javaScript', imagem: '../../../assets/js.png'}
      ],
      textprojetos: 'O site "Acerte um numero secreto" é uma emocionante experiência de jogo que combina tecnologia de reconhecimento de voz com HTML, CSS e JavaScript para criar um desafio interativo. Os jogadores são desafiados a encontrar um número aleatório gerado pela máquina por meio do uso de comandos de voz. A mecânica do jogo é simples, mas a diversão está garantida.',
    },
    //projeto 5
    {
      id:'4',
      titles: 'Cartão de Presente Especial para Minha Esposa',
      img: '../../../assets/cartaodepresente.png',
      linkDeploy: 'https://presenteweb.vercel.app/',
      linkGithub: 'https://github.com/douglas1997silva/presenteweb',
      tecnologias: [
        { nome: 'HTML', imagem: '../../../assets/html-5.png' },
        { nome: 'CSS', imagem: '../../../assets/css-3.png' },
      ],
      textprojetos: '  Este projeto é um cartão de presente feito com HTML e CSS que representa um presente significativo para minha esposa. Este projeto tem um valor emocional especial, uma vez que é um dos meus primeiros projetos de desenvolvimento web e foi criado com muito amor e carinho.',
    },
    //projeto 6
    {
      id:'5',
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
    //projeto 7
    {
      id:'6',
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
    //projeto 7

    // Outros projetos
  ];
  projetosExibidos: any[] = [];
  projetosPorPagina: number = 6; // Defina o número de projetos por página
  paginaAtual: number = 1;

  carregarMaisProjetos() {
    this.paginaAtual++;
    this.carregarProjetos();
  }

  private carregarProjetos() {
    const p = (this.paginaAtual - 1) * this.projetosPorPagina;
    const r = p + this.projetosPorPagina;
    this.projetosExibidos = this.projetos.slice(0, r);
  }
  constructor (){}

  ngOnInit(): void {
    this.carregarProjetos();
}





}

