import { Component, OnInit } from '@angular/core';

import { disciplinas1 } from '../disciplinas1'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-disciplinas-semestre1-details',
  templateUrl: './disciplinas-semestre1-details.component.html',
  styleUrls: ['./disciplinas-semestre1-details.component.css']
})
export class DisciplinasSemestre1DetailsComponent implements OnInit {
disciplinas1;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.disciplinas1 = disciplinas1[params.get('index')];
    }
    );
  }

}