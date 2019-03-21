import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PartidosService 
{

  constructor( private http: HttpClient ) 
  {
  }

  obtenerPartidosPorHttp()
  {
    const direccion = '/assets/estructura_torneos.json';
    return this.http.get(direccion).pipe(
                                          map ( 
                                                (response: any) => response.torneos
                                              )
                                        );
  }
  
  obtenerPartidos()
  {
    return [
            {
              "torneos":
              [
                  {
                      "idTorneo": 1,
                      "nombreTorneo": "X Torneo Ciudad de Salamanca",
                      "participantesTorneo": "8",
                      "localizacionTorneo": "Salamanca",
                      "rondasTorneo":
                      [
                          {
                              "nombreRonda": "Cuartos",
                              "rivalPartido": "Lorep Ipsum",
                              "fechaPartido": "14/03/2019",
                              "resultado":
                              [
                                  "6-1", "6-0"
                              ]
                            
                          },
                          {
                              "nombreRonda": "Semifinal",
                              "rivalPartido": "John Doe",
                              "fechaPartido": "21/03/2019",
                              "resultado":
                              [
                                  "6-4", "6-3"
                              ]
                          }
                      ]
          
                  },
                  {
                      "idTorneo": 2,
                      "nombreTorneo": "III Torneo de Ciudad Rodrigo",
                      "participantesTorneo": "16",
                      "localizacionTorneo": "Ciudad Rodrigo",
                      "rondasTorneo":
                      [
                          {
                              "nombreRonda": "Octavos",
                              "rivalPartido": "AAA BBB",
                              "fechaPartido": "23/03/2019",
                              "resultado":
                              [
                                  "1-6", "6-7"
                              ]
                          }
                      ]
          
                  }
          
              ]
          }
        ]
  }



}
