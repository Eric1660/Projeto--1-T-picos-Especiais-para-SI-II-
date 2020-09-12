import { Component, OnInit } from '@angular/core';

import { disciplinas4 } from '../disciplinas4'

@Component({
  selector: 'app-disciplinas-semestre4',
  templateUrl: './disciplinas-semestre4.component.html',
  styleUrls: ['./disciplinas-semestre4.component.css']
})
export class DisciplinasSemestre4Component implements OnInit {

  
  list = disciplinas4;
  
  
  constructor() { }

  ngOnInit() {
  }

}