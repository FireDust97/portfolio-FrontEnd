import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HardSoftSkillsComponent } from './components/hard-soft-skills/hard-soft-skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HardSoftSkillsComponent,
    ProyectosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
      "outerStrokeGradient": true,
      "outerStrokeWidth": 19,
      "outerStrokeLinecap": "inherit",
      "subtitleColor": '#000000',
      "subtitleFontSize": "16",
      "subtitleFontWeight": "600",
      "innerStrokeWidth": 19,
      "titleFontSize": "22",
      "titleFontWeight": "500",
      "animateTitle": false,
      "showSubtitle": false,
      "showTitle": false,
      "showUnits": false,
      "showImage": true,
      "showBackground": false,
      "clockwise": false,
      "title": [
        "Trabajo en",
        "equipo"
      ],
      "responsive": false,
      "startFromZero": false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
