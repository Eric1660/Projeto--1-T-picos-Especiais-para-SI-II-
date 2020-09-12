import { Component, OnInit } from '@angular/core';

import { disciplinas3 } from '../disciplinas3'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-disciplinas-semestre3-details',
  templateUrl: './disciplinas-semestre3-details.component.html',
  styleUrls: ['./disciplinas-semestre3-details.component.css']
})
export class DisciplinasSemestre3DetailsComponent implements OnInit {

 disciplinas3;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.disciplinas3 = disciplinas3[params.get('index')];
    }
    );
  }

}