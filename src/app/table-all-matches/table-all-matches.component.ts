import { Component, OnInit } from '@angular/core';
import { PartidosService } from '../servicios/partidos.service';

@Component({
  selector: 'app-table-all-matches',
  templateUrl: './table-all-matches.component.html',
  styleUrls: ['./table-all-matches.component.css']
})

export class TableAllMatchesComponent implements OnInit
{
  partidos = [];

  ngOnInit()
  {
    
  }

  
  constructor(private partidosService: PartidosService)
  {
      partidosService.obtenerPartidosPorHttp().subscribe( 
                                                          (data: any) =>
                                                          {
                                                            console.log(data);
                                                            this.partidos = data;
                                                          }
      );

      console.log(this.partidos);
  }

}
