import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-mim',
  templateUrl: './sobre-mim.component.html',
  styleUrls: ['./sobre-mim.component.css']
})
export class SobreMimComponent implements OnInit {
  html:string = "../../../assets/html-5.png"
  css:string= "../../../assets/css-3.png"
 bootstrap:string = '../../../assets/bootstrap.png'
 js:string = "../../../assets/js.png"
 ty:string = '../../../assets/icons8-typescript-48.png'
 sass:string = '../../../assets/sass.png'
 angular:string ='../../../assets/icons8-angular-48.png'
  constructor() { }

  ngOnInit(): void {
  }

}
