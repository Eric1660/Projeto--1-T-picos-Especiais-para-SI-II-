import { Component, OnInit } from '@angular/core';

import { disciplinas5 } from '../disciplinas5'

@Component({
  selector: 'app-disciplinas-semestre5',
  templateUrl: './disciplinas-semestre5.component.html',
  styleUrls: ['./disciplinas-semestre5.component.css']
})
export class DisciplinasSemestre5Component implements OnInit {

   list = disciplinas5;
 
  constructor() { }

  ngOnInit() {
  }

}