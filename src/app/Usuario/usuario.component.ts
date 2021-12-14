import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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
    bandera = true;
    Filtro = new FormControl('');

    constructor(private servicioUsuario : UsuarioService,
        private toastr: ToastrService) {}

    ngOnInit() : void {
        this.listar();   
        this.Filtro.valueChanges.subscribe(data => console.log("Data: ", data));    
        this.busqueda();     
    }
    
    listar():void{
        this.servicioUsuario.getAll().subscribe(u => this.usuarios = u)
    }

    delete(id:any):void{
        this.servicioUsuario.delete(id).subscribe(data =>{
            this.toastr.error("El usuario fue eliminado con éxito", "Usuario eliminado correctamente");
            this.listar(); 
        }, error => {console.log(error);})
    }
    
    orden(){     
        if(this.bandera == true){
            this.usuarios = this.usuarios.sort((a,b) =>  a.id! < b.id! ? 1 : -1 );
            this.bandera = false;
        }   
        else{
            this.usuarios = this.usuarios.sort((a,b) =>  a.id! > b.id! ? 1 : -1 );
            this.bandera = true;
        }
    }

    busqueda(){        
        if(this.Filtro.value != ''){
            for(let usuario of this.usuarios) {
                if(usuario.userID == this.Filtro.value){
                    this.usuarios = [usuario];
                }  
            }
        }
        else{
            this.listar(); 
        }
    }
}