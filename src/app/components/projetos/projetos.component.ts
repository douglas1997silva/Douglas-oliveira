import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {
  @Input()
  html:string = "../../../assets/html-5.png";
  @Input()
  css:string= "../../../assets/css-3.png";
  @Input()
 bootstrap:string = '../../../assets/bootstrap.png';
 @Input()
 js:string = "../../../assets/js.png";
 @Input()
 ty:string = '../../../assets/typescript.png';
 @Input()
 sass:string = '../../../assets/sass.png';
 @Input()
 angular:string ='../../../assets/angular.png';
 @Input()
 github:string = '../../../assets/placa-do-github.png';

  constructor() { }

  ngOnInit(): void {
  }

}
