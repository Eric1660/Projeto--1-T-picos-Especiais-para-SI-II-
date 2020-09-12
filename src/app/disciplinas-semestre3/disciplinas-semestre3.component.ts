import { Component, OnInit } from '@angular/core';

import { disciplinas3 } from '../disciplinas3'

@Component({
  selector: 'app-disciplinas-semestre3',
  templateUrl: './disciplinas-semestre3.component.html',
  styleUrls: ['./disciplinas-semestre3.component.css']
})
export class DisciplinasSemestre3Component implements OnInit {

  list = disciplinas3;

  constructor() { }

  ngOnInit() {
  }

}