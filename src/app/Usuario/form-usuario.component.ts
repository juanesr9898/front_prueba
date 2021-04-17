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
  loginText : string = "Login";
  question : string = "¿No te has registrado aún?";
  reg : string = "Registro";
  banderaSH : boolean = true;
  banderaH : boolean = true;
  success : string = "Te has registrado con éxito!";
  
  constructor(private servicioUsuario: UsuarioService, private router:Router) { }

  ngOnInit(): void {
  }

  showHidden():void{
    if( this.loginText === "Login" ) {    
      this.loginText = "Registro";
      this.question = "¿Ya estas registrado?";
      this.reg = "Login";
      this.banderaSH = false;
    } 
    else {
      this.loginText = "Login";
      this.question = "¿No te has registrado aún?";
      this.reg = "Registro";
      this.banderaSH = true;
    }
  }

  hidden():void{
    if( this.loginText === "Registro" ) {    
      this.banderaH = true;
    } 
    else {
      this.success = "Te has registrado con éxito!";
      this.banderaH = false;
    }
  }

  create():void{
    console.log(this.usuario);
  }

}
