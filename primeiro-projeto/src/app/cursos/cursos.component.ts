import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  portalName:string;
  courses: string[] = ['Java', 'PHP', 'Javascript'];

  constructor() {
    this.portalName = 'http://blabla.com'
  }

  ngOnInit() {
  }

}
