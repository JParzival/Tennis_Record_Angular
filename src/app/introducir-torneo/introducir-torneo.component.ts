import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-introducir-torneo',
  templateUrl: './introducir-torneo.component.html',
  styleUrls: ['./introducir-torneo.component.css']
})

export class IntroducirTorneoComponent implements OnInit 
{

  constructor(private router:Router) 
  {
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

}
