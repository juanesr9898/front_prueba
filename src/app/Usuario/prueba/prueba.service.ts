import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prueba } from './prueba';

@Injectable({
    providedIn: 'root'
  })

export class PruebaService {

  private PruebaUrl : string = '/api/prueba'; //Conexión con el backend de prueba
  constructor(private http:HttpClient) { }

  //Obtener una Prueba
  get(id : number) : Observable<Prueba> {
    return this.http.get<Prueba>(this.PruebaUrl + '/' +  id);
  }

  //Obtener todos los Pruebas dependiendo de la ID del usuario
  getAllByUserID(id : number) : Observable<Prueba[]> {
    return this.http.get<Prueba[]>(this.PruebaUrl + '/' + 'list' + '/' + id);
  }

  //Obtener todos los Pruebas
  getAll() : Observable<Prueba[]> {
    return this.http.get<Prueba[]>(this.PruebaUrl);
  }

  //Crear Prueba
  create(Prueba : Prueba) : Observable<Prueba>{
    return this.http.post<Prueba>(this.PruebaUrl,Prueba);
  }

  //Actualizar Prueba
  update(id : number, Prueba : Prueba) : Observable<Prueba>{
    return this.http.put<Prueba>(this.PruebaUrl + '/' + id, Prueba);
  }

  //Eliminar Prueba
  delete(id : number) : Observable<Prueba> {
    return this.http.delete<Prueba>(this.PruebaUrl + '/' + id);
  }
}