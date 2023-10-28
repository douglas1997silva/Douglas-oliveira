import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resumo-sobre',
  templateUrl: './resumo-sobre.component.html',
  styleUrls: ['./resumo-sobre.component.css']
})
export class ResumoSobreComponent implements OnInit {
  html:string = "../../../assets/html-5.png";
  css:string= "../../../assets/css-3.png";
 bootstrap:string = '../../../assets/bootstrap.png';
 js:string = "../../../assets/js.png";
 ty:string = '../../../assets/typescript.png';
 sass:string = '../../../assets/sass.png';
 angular:string ='../../../assets/angular.png';
 github:string = '../../../assets/placa-do-github.png';
  constructor() { }

  ngOnInit(): void {
  }

}
