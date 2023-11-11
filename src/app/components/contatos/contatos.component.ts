import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css'],
  template: `

`
})

export class ContatosComponent implements OnInit {
  name: string | undefined;
  email: string | undefined;
  message: string | undefined;

  submitForm() {
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    // para o seu servidor ou serviço de e-mail
    console.log('Form submitted:', this.name, this.email, this.message);
    // Você precisará implementar o envio dos dados para um serviço que tratará o envio de e-mail.
  }
  constructor() {
    // Agora você pode utilizar os métodos do serviço aqui
  }

  ngOnInit(): void {
  }

}
