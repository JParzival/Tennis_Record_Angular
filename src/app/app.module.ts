import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TableAllMatchesComponent } from './table-all-matches/table-all-matches.component';
import { IntroducirTorneoComponent } from './introducir-torneo/introducir-torneo.component';
import { IntroducirPartidoComponent } from './introducir-partido/introducir-partido.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TableAllMatchesComponent,
    IntroducirTorneoComponent,
    IntroducirPartidoComponent,
    EstadisticasComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
