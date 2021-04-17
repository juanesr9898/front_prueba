import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';

@Component({
    selector : 'app-Usuarios',
    templateUrl : './usuario.component.html',
    styleUrls : ['./usuario.component.css']
})

export class UsuarioComponent implements OnInit {
    titulo : string = "Lista de Usuarios";
    prueba : string = "Prueba del componente Usuarios";
    usuarios? : Usuario[];

    constructor(private servicioUsuario : UsuarioService) {}

    ngOnInit() : void {
        this.servicioUsuario.getAll().subscribe(u => this.usuarios = u )
    }
}