import { Component } from '@angular/core';

@Component({
  selector: 'app-informacao',
  templateUrl: './informacao.component.html',
  styleUrls: ['./informacao.component.css'],

})

export class InformacaoComponent {
  contatos: any[] = [
    {
      des: 'GiThUb',
      img:'../../../assets/github.svg',
      link: 'https://github.com/douglas1997silva',
},

{
  des: 'LinkeDIN',
  img:'../../../assets/linkedin.png',
  link: 'https://www.linkedin.com/in/douglas-oliveira-625064271/',
},

{
  des: 'WhaTsApp',
  img:'../../../assets/whatsapp.png',
  link: 'https://api.whatsapp.com/send?phone=5511979576926',
},
{
  des: 'Alura',
  img:'https://cursos.alura.com.br/assets/images/logos/logo-alura-white.svg',
  link: 'https://cursos.alura.com.br/vitrinedev/douglas-olliveira1997',
},
{
  des: 'Dio',
  img:'https://hermes.digitalinnovation.one/assets/diome/logo-full.svg',
  link: 'https://www.dio.me/users/douglas_olliveira1997',
},

]
}
