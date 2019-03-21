import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-introducir-partido',
  templateUrl: './introducir-partido.component.html',
  styleUrls: ['./introducir-partido.component.css']
})

export class IntroducirPartidoComponent implements OnInit 
{

  constructor(private router: Router)
  {
  }

  ngOnInit() 
  {
  }

  avanzar_pantalla_principal()
  {
    this.router.navigate(['/home']);
  }

}
