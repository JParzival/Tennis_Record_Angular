import{Partido} from "./partido";

export class Torneo
{
    idTorneo: number;
    nombreTorneo: string;
    participantesTorneo: string;
    localizacionTorneo: string;
    rondasTorneo: Partido[];
    
  
    constructor(idTorneo, nombreTorneo, participantesTorneo, localizacionTorneo)
    {
      this.idTorneo = idTorneo;
      this.nombreTorneo = nombreTorneo;
      this.participantesTorneo = participantesTorneo;
      this.localizacionTorneo = localizacionTorneo;
      this.rondasTorneo = null;
    }
  }
  