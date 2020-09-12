import { Component, OnInit } from '@angular/core';

import { disciplinas5 } from '../disciplinas5'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-disciplinas-semestre5-details',
  templateUrl: './disciplinas-semestre5-details.component.html',
  styleUrls: ['./disciplinas-semestre5-details.component.css']
})
export class DisciplinasSemestre5DetailsComponent implements OnInit {

  disciplinas5;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.disciplinas5 = disciplinas5[params.get('index')];
    }
    );
  }

}