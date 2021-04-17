import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {
  usuario : Usuario = new Usuario();
  titulo : string = "Registro Usuarios";
  
  constructor(private servicioUsuario: UsuarioService, private router:Router) { }

  ngOnInit(): void {
  }

  create():void{
    console.log(this.usuario);
  }

}
