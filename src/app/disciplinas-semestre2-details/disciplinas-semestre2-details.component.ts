import { Component, OnInit } from '@angular/core';

import { disciplinas2 } from '../disciplinas2'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-disciplinas-semestre2-details',
  templateUrl: './disciplinas-semestre2-details.component.html',
  styleUrls: ['./disciplinas-semestre2-details.component.css']
})
export class DisciplinasSemestre2DetailsComponent implements OnInit {

disciplinas2;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.disciplinas2 = disciplinas2[params.get('index')];
    }
    );
  }

}