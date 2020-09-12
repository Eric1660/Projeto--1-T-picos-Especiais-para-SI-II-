import { Component, OnInit } from '@angular/core';

import { disciplinas4 } from '../disciplinas4'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-disciplinas-semestre4-details',
  templateUrl: './disciplinas-semestre4-details.component.html',
  styleUrls: ['./disciplinas-semestre4-details.component.css']
})
export class DisciplinasSemestre4DetailsComponent implements OnInit {

disciplinas4;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.disciplinas4 = disciplinas4[params.get('index')];
    }
    );
  }

}