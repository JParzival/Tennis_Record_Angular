import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TableAllMatchesComponent } from './table-all-matches/table-all-matches.component';
import { IntroducirTorneoComponent } from './introducir-torneo/introducir-torneo.component';
import { IntroducirPartidoComponent } from './introducir-partido/introducir-partido.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    NavbarComponent,
    TableAllMatchesComponent,
    IntroducirTorneoComponent,
    IntroducirPartidoComponent,
    EstadisticasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
