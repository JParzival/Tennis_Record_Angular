import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { Partido } from '../modelos/partido';
import { PartidosService } from '../servicios/partidos.service';

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
  resultado: String  = "";

  constructor(private router: Router,
              private partidosService: PartidosService)
  {
    console.log(this.partidosService.allData)
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
    let allData = [];
    allData =  this.partidosService.obtenerAllData();

    const nuevoId = allData[this.partidosService.allData.length - 1].idTorneo + 1;
    const nuevoPartido = new Partido(nuevoId, this.nombreRonda, this.rivalPartido, this.fechaPartido, this.resultado);

    this.partidosService.allData.push(nuevoPartido);

    console.log(this.partidosService.allData);
  }

}
