import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private UsuarioUrl : string = '/api/usuarios'; //Conexión con el backend de usuarios
  constructor(private http:HttpClient) { }

  //Obtener un usuario
  get(id : number) : Observable<Usuario> {
    return this.http.get<Usuario>(this.UsuarioUrl + '/' + id);
  }

  //Obtener todos los usuarios
  getAll() : Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.UsuarioUrl);
  }

  //Crear usuario
  create(usuario : Usuario) : Observable<Usuario>{
    return this.http.post<Usuario>(this.UsuarioUrl,usuario);
  }

  //Actualizar usuario
  update(id : number, usuario : Usuario) : Observable<Usuario>{
    return this.http.put<Usuario>(this.UsuarioUrl + '/' + id, usuario);
  }

  //Eliminar usuario
  delete(id : number) : Observable<Usuario> {
    return this.http.delete<Usuario>(this.UsuarioUrl + '/' + id);
  }
  
}
