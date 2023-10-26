import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],

})
export class NavBarComponent implements OnInit {
   isMenuOpen = false ;
   navbardark = false;


  constructor() { }
  toggleMenu():void{
   this.isMenuOpen = !this.isMenuOpen;

  }


  changeThemeColor(){
    document.body.classList.toggle('dark-theme');
    this.navbardark = ! this.navbardark;
  }

  ngOnInit(): void {
  }
}

