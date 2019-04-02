import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { PartidosService } from '../servicios/partidos.service';

import { Torneo } from '../modelos/torneo';

@Component({
  selector: 'app-introducir-torneo',
  templateUrl: './introducir-torneo.component.html',
  styleUrls: ['./introducir-torneo.component.css']
})

export class IntroducirTorneoComponent implements OnInit 
{

  localizacionTorneo: String  = "";
  participantesTorneo: String = "";
  nombreTorneo: String = "";

  listaTorneos = [];

  constructor(private router:Router,
              private partidosService: PartidosService) 
  {
    if(partidosService.allData.length == 0)
    {
      partidosService.obtenerPartidosPorHttp().subscribe( 
        (data: any) =>
        {
          console.log(data);
          this.listaTorneos = data;
        }
      );
    }
    else
    {

      this.listaTorneos = partidosService.allData;
    }
    
  }

  ngOnInit() 
  {
  }

  avanzar_pantalla_introducir_partido()
  {
    this.router.navigate(['/nuevoPartido']);
  }

  volverPantallaPrincipal()
  {
    this.router.navigate(['/home']);
  }

  anadirTorneo() 
  {
    let allData = [];
    
    allData = this.partidosService.obtenerAllData();

    const nuevoId = allData[this.partidosService.allData.length - 1].idTorneo + 1;
    const nuevoTorneo = new Torneo(nuevoId, this.nombreTorneo, this.participantesTorneo, this.localizacionTorneo);
    this.partidosService.allData.push(nuevoTorneo);
    console.log(this.partidosService.allData);

  }

}
