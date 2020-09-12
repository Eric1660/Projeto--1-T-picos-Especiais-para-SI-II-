import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { DisciplinasSemestreComponent } from './disciplinas-semestre/disciplinas-semestre.component';
import { DisciplinasSemestre1Component } from './disciplinas-semestre1/disciplinas-semestre1.component';
import { DisciplinasSemestre2Component } from './disciplinas-semestre2/disciplinas-semestre2.component';
import { DisciplinasSemestre3Component } from './disciplinas-semestre3/disciplinas-semestre3.component';
import { DisciplinasSemestre4Component } from './disciplinas-semestre4/disciplinas-semestre4.component';
import { DisciplinasSemestre5Component } from './disciplinas-semestre5/disciplinas-semestre5.component';
import { DisciplinasSemestre1DetailsComponent } from './disciplinas-semestre1-details/disciplinas-semestre1-details.component';
import { DisciplinasSemestre2DetailsComponent } from './disciplinas-semestre2-details/disciplinas-semestre2-details.component';
import { DisciplinasSemestre3DetailsComponent } from './disciplinas-semestre3-details/disciplinas-semestre3-details.component';
import { DisciplinasSemestre4DetailsComponent } from './disciplinas-semestre4-details/disciplinas-semestre4-details.component';
import { DisciplinasSemestre5DetailsComponent } from './disciplinas-semestre5-details/disciplinas-semestre5-details.component';
import { DisciplinasCursadasComponent } from './disciplinas-cursadas/disciplinas-cursadas.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},

      {path: 'disciplinas-semestre', component: DisciplinasSemestreComponent},
      {path: 'disciplinas-semestre1', component: DisciplinasSemestre1Component},
      {path: 'disciplinas1/:index', component: DisciplinasSemestre1DetailsComponent},
      {path: 'disciplinas-semestre2', component: DisciplinasSemestre2Component},
      {path: 'disciplinas2/:index', component: DisciplinasSemestre2DetailsComponent},
      {path: 'disciplinas-semestre3', component: DisciplinasSemestre3Component},
      {path: 'disciplinas3/:index', component: DisciplinasSemestre3DetailsComponent},
      {path: 'disciplinas-semestre4', component: DisciplinasSemestre4Component},
      {path: 'disciplinas4/:index', component: DisciplinasSemestre4DetailsComponent},
      {path: 'disciplinas-semestre5', component: DisciplinasSemestre5Component},
      {path: 'disciplinas5/:index', component: DisciplinasSemestre5DetailsComponent},
      {path: 'disciplinas-cursadas', component: DisciplinasCursadasComponent},
    ])
  ],
  declarations: [ AppComponent, HelloComponent, HomeComponent,  DisciplinasSemestreComponent, DisciplinasSemestre1Component, DisciplinasSemestre2Component, DisciplinasSemestre3Component, DisciplinasSemestre4Component, DisciplinasSemestre5Component, DisciplinasSemestre1DetailsComponent, DisciplinasSemestre2DetailsComponent, DisciplinasSemestre3DetailsComponent, DisciplinasSemestre4DetailsComponent, DisciplinasSemestre5DetailsComponent, DisciplinasCursadasComponent, ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
