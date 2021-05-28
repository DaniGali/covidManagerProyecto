import { IncidenciaModel } from "src/app/tab2/model/IncidenciaModel";
import { ClaseModel } from "./ClaseModel";
import { DatosMedicosModel } from "./DatosMedicosModel";
import { ProfesorModel } from "./ProfesorModel";
import { ResponsableModel } from "./ResponsableModel";

export class AlumnoModel{
    identificador: string;
    dni: string;
    nombre: string;
    apellido1: string;
    apellido2: string;
    fechaNacimineto: Date;
    telefono: string;
    direccion: string;
    responsables: ResponsableModel[];
    tutor: ProfesorModel;
    incidencia: IncidenciaModel[];
    clase: ClaseModel;
    datosMedicos: DatosMedicosModel;
}