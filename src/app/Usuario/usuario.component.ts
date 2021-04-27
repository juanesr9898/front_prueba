import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector : 'app-Usuarios',
    templateUrl : './usuario.component.html',
    styleUrls : ['./usuario.component.css']
})

export class UsuarioComponent implements OnInit {
    titulo : string = "Lista de Usuarios";
    usuarios : Usuario[] = [];

    constructor(private servicioUsuario : UsuarioService, private toastr: ToastrService) {}

    ngOnInit() : void {
        this.listar();
    }

    listar():void{
        this.servicioUsuario.getAll().subscribe(u => this.usuarios = u )
    }

    delete(id:any):void{
        this.servicioUsuario.delete(id).subscribe(data =>{
            this.toastr.error("El usuario fue eliminado con éxito", "Usuario eliminado correctamente");
            this.listar(); 
            }, error => {
                console.log(error);
            })
        }
}