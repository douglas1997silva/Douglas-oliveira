import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent implements OnInit {
  github:string = "fi fi-brands-linkedin"
  constructor() { }

  ngOnInit(): void {
  }

}
