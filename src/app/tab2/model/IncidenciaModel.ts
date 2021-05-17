import { AlumnoModel } from "src/app/tab1/model/AlumnoModel";
import { ActuacionModel } from "src/app/tab3/model/ActuacionModel";

export class IncidenciaModel{
    id: string;
    sintomatologia: string;
    fecha: Date;
    alumno: AlumnoModel;
    actuacion: ActuacionModel;
}