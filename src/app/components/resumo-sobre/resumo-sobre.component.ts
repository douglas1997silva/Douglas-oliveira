import { Component, OnInit ,HostListener, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-resumo-sobre',
  templateUrl: './resumo-sobre.component.html',
  styleUrls: ['./resumo-sobre.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [
        animate('350ms ease-in', style({ opacity: 1 })),
      ]),
    ]),
  ],
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
 isSectionVisible = false;

 constructor(private elementRef: ElementRef) {}

 @HostListener('window:scroll', [])
 onScroll() {
   const element = this.elementRef.nativeElement;
   const rect = element.getBoundingClientRect();
   this.isSectionVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
 }


  ngOnInit(): void {
  }

}
