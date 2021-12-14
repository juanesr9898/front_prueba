export class Prueba{
    // El ? hace que la propiedad sea opcional para no tener errores de inicialización
    // Esto sucede por el modo estricto al crear el proyecto
    //
    id? : number;
    descripcion? : string;
    enlace? : string;
    materia? : string;
    curso? : string;
    docenteID? : number;
}