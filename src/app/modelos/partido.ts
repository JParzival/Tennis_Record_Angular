export class Partido
{
    numero: number;
    nombreRonda: string;
    rivalPartido: string;
    fechaPartido: string;
    resultado: string;
  
    constructor(numero, nombreRonda, rivalPartido, fechaPartido, resultado)
    {
      this.numero = numero;
      this.nombreRonda = nombreRonda;
      this.rivalPartido = rivalPartido;
      this.fechaPartido = fechaPartido;
      this.resultado = resultado;
    }
  }
  