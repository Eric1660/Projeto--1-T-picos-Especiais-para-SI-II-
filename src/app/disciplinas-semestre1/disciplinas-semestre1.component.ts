import { Component, OnInit } from '@angular/core';

import { disciplinas1 } from '../disciplinas1'

@Component({
  selector: 'app-disciplinas-semestre1',
  templateUrl: './disciplinas-semestre1.component.html',
  styleUrls: ['./disciplinas-semestre1.component.css']
})
export class DisciplinasSemestre1Component implements OnInit {

  list = disciplinas1;
  
  constructor() { }

  ngOnInit() {
  }

}