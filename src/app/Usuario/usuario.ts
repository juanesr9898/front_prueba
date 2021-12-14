import { Data } from "@angular/router";

export class Usuario{
    // El ? hace que la propiedad sea opcional para no tener errores de inicialización
    // Esto sucede por el modo estricto al crear el proyecto
    id? : number;
    nombre? : string;
    userID? : string;
    email? : string;
    password? : string;
    fecha_creacion? : Data;
    tipoUsuario? : number = 1; // Por defecto todos seran estudiantes
    materias? : string;
    curso? : string;
}