import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  constructor() { }

  getCourses(){
    return ['Java', 'PHP', 'Javascript'];
  }
}
