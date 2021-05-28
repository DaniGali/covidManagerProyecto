import { IncidenciaModel } from "src/app/tab2/model/IncidenciaModel";
import { PCRModel } from "./PCRModel";

export class ActuacionModel{
    identificador: string;
    fecha: Date;
    ultimoDiaClase: string;
    incidencia: IncidenciaModel;
    pcr: PCRModel[];
}