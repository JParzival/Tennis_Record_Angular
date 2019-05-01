import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { Partido } from '../modelos/partido';
import { PartidosService } from '../servicios/partidos.service';
import { Torneo } from '../modelos/torneo';
import { R3BoundTarget, ConstantPool } from '@angular/compiler';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
              private partidosService: PartidosService,
              private http: HttpClient )
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
    }

    if(partidosService.dataAMedias)
    {
      this.torneos.push(partidosService.dataAMedias);
    }

    console.log(partidosService.allData);
      
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

      //Buscar torneo metido en el campo select, recoger los partidos ya existentes, meter uno nuevo e introducirlo a allData

      for (let tournament of allData)
      {

        if(tournament.nombreTorneo == this.nombreTorneo)
        {

         // saber en qué ronda estás

          let rondas = tournament.rondasTorneo.length;
          let participantesTorneo = tournament.participantesTorneo;

          let diferencia = Math.log2(participantesTorneo) - rondas;

          switch(diferencia)
          {
            case 0: console.log("no queda torneo");
                    return;

            case 1: this.nombreRonda = "Final";
                    break;

            case 2: this.nombreRonda = "Semifinal";
                    break;

            case 3: this.nombreRonda = "Cuartos";
                    break;

            case 4: this.nombreRonda = "Octavos";
                    break;

            case 5: this.nombreRonda = "Dieciseisavos";
                    break;

            case 6: this.nombreRonda = "Te queda un mundo colega";
                    break;
          }

          const nuevoPartido = new Partido(1, this.nombreRonda, this.rivalPartido, this.fechaPartido, resultado);
          console.log(nuevoPartido);
  
          tournament.rondasTorneo.push(nuevoPartido);

          console.log(tournament);

          //borro el torneo anterior para que no se duplique...

          this.partidosService.allData = this.partidosService.allData.filter(item => item.nombreTorneo !== this.nombreTorneo);

          //introduzco el nuevo

          //this.partidosService.allData.push(tournament);

          this.partidosService.postear(JSON.stringify(tournament)).subscribe(
                response => console.log("Respuesta: " + response),
                err => console.log("Error: " + err)
          );

          break;
        }

      }

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
  
      //this.partidosService.allData.push(torneo);

      this.partidosService.postear(JSON.stringify(torneo)).subscribe(
                response => console.log(response),
                err => console.log(err)
      );
      
    }
  }

    
}
