import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableAllMatchesComponent } from './table-all-matches/table-all-matches.component';
import { IntroducirTorneoComponent } from './introducir-torneo/introducir-torneo.component';
import { IntroducirPartidoComponent } from './introducir-partido/introducir-partido.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';

const routes: Routes =  [
                          {
                            path: 'home',
                            component: TableAllMatchesComponent
                          },
                          {
                            path: 'nuevoTorneo',
                            component: IntroducirTorneoComponent
                          },
                          {
                            path: 'nuevoPartido',
                            component: IntroducirPartidoComponent
                          },
                          {
                            path: 'estadisticas',
                            component: EstadisticasComponent
                          },
                          {
                            path: '',
                            redirectTo: 'home',
                            pathMatch: 'full'
                          }
                        ];

@NgModule(
{
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
