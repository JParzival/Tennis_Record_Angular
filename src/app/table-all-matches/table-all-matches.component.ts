import { Component, OnInit } from '@angular/core';
import { PartidosService } from '../servicios/partidos.service';

@Component({
  selector: 'app-table-all-matches',
  templateUrl: './table-all-matches.component.html',
  styleUrls: ['./table-all-matches.component.css']
})

export class TableAllMatchesComponent implements OnInit
{
  torneos = [];

  ngOnInit()
  {
  }

  
  constructor(private partidosService: PartidosService)
  {
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

}
