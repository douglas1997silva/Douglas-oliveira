import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-munu-lateral',
  templateUrl: './munu-lateral.component.html',
  styleUrls: ['./munu-lateral.component.css']
})

export class MunuLateralComponent {
home:string = '../../../assets/home.png';
sobre:string = '../../../assets/sobre.png';
projetos:string= '../../../assets/projetos.png';
contatos:string = '../../../assets/contatos.png';
navbardark = false;




  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  changeThemeColor(){
    document.body.classList.toggle('dark-theme');
    this.navbardark = ! this.navbardark;
  }
}
