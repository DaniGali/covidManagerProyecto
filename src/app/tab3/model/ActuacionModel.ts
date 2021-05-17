import { IncidenciaModel } from "src/app/tab2/model/IncidenciaModel";
import { PCRModel } from "./PCRModel";

export class ActuacionModel{
    id: string;
    fecha: Date;
    ultimoDiaCalse: string;
    incidencia: IncidenciaModel;
    pcr: PCRModel[];
}