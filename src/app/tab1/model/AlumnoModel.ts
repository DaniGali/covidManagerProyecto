import { IncidenciaModel } from "src/app/tab2/model/IncidenciaModel";
import { ClaseModel } from "./ClaseModel";
import { DatosMedicosModel } from "./DatosMedicosModel";
import { ProfesorModel } from "./ProfesorModel";
import { ResponsableModel } from "./ResponsableModel";

export class AlumnoModel{
    id: string;
    dni: string;
    nombre: string;
    fechaNacimineto: string;
    telefono: string;
    direccion: string;
    responsables: ResponsableModel[];
    tutor: ProfesorModel;
    incidencia: IncidenciaModel[];
    clase: ClaseModel;
    datosMedicos: DatosMedicosModel;
}