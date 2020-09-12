import { Component, OnInit } from '@angular/core';

import { disciplinas2 } from '../disciplinas2'

@Component({
  selector: 'app-disciplinas-semestre2',
  templateUrl: './disciplinas-semestre2.component.html',
  styleUrls: ['./disciplinas-semestre2.component.css']
})
export class DisciplinasSemestre2Component implements OnInit {

   list = disciplinas2;
  
  constructor() { }

  ngOnInit() {
  }

}