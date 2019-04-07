import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { Partido } from '../modelos/partido';
import { PartidosService } from '../servicios/partidos.service';
import { Torneo } from '../modelos/torneo';
import { R3BoundTarget } from '@angular/compiler';

@Component({
  selector: 'app-introducir-partido',
  templateUrl: './introducir-partido.component.html',
  styleUrls: ['./introducir-partido.component.css']
})

export class IntroducirPartidoComponent implements OnInit 
{

  nombreRonda: String  = "";
  rivalPartido: String  = "";
  fechaPartido: String  = "";
  r1: String  = "";
  r2: String  = "";
  r3: String  = "";
  nombreTorneo: String = "";

  dataAMedias = Torneo;

  torneos = [];

  constructor(private router: Router,
              private partidosService: PartidosService)
  {
    partidosService.obtenerDataAMedias();

    if(partidosService.allData.length == 0)
    {
      partidosService.obtenerPartidosPorHttp().subscribe( 
        (data: any) =>
        {
          this.torneos = data;

          partidosService.allData = this.torneos;
          console.log(partidosService.allData);
        }
      );
    }
    else
    {
      this.torneos = partidosService.allData;
      console.log(partidosService.allData);
    }
      
  }

  ngOnInit() 
  {
  }

  avanzar_pantalla_principal()
  {
    this.router.navigate(['/home']);
  }

  anadirPartido() 
  {
    let resultado = "";

    if(this.r3.length != 0)
    {
      resultado = this.r1 + "," + this.r2 + "," + this.r3;
    }
    else
    {
      resultado = this.r1 + "," + this.r2;
    }

    

    let allData = [];
    allData =  this.partidosService.obtenerAllData();

    let torneo: Torneo = this.partidosService.obtenerDataAMedias();

    if (!torneo)
    {
      console.log("No hay torneo a medias, has entrado directamente a introducir resultado");
    }
    else
    {
      torneo.rondasTorneo = [];

      switch(torneo.participantesTorneo)
      {
        case "8": this.nombreRonda = "Cuartos";
                break;
        
        case "16": this.nombreRonda = "Octavos";
                break;
        
        case "32": this.nombreRonda = "Dieciseisavos";
                break;
  
        case "64": this.nombreRonda = "Primera Ronda";
                break;
          
        case "128": this.nombreRonda = "Primera Ronda";
                 break;
      }
  
      const nuevoPartido = new Partido(1, this.nombreRonda, this.rivalPartido, this.fechaPartido, resultado);
  
      torneo.rondasTorneo.push(nuevoPartido);
  
      this.partidosService.allData.push(torneo);
    }
    }

    

}
