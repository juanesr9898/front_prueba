import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  banderaS : boolean = true;

  checkoutForm = this.formBuilder.group({
    nombre: ['', Validators.required],
    userID: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  constructor(private servicioUsuario: UsuarioService, private router:Router, 
    private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  // Función que muestra/oculta atributos dependiendo si quiere logearse o registrarse
  showHidden():void{
    if( this.loginText === "Login" ) { 
      this.checkoutForm.reset();   
      this.loginText = "Registro";
      this.question = "¿Ya estas registrado?";
      this.reg = "Login";
      this.banderaSH = false;
    } 
    else {
      this.checkoutForm.reset();
      this.loginText = "Login";
      this.question = "¿No te has registrado aún?";
      this.reg = "Registro";
      this.banderaSH = true;
      this.banderaS = true;
    }
  }

  hidden():void{
    if( this.loginText === "Registro" ) {   
        this.create(); 
      } 
  }

  create():void{
    console.log(this.usuario);
      this.servicioUsuario.create(this.usuario).subscribe(
        res=>this.router.navigate(['#'])
      );
      this.banderaS = false;
      this.checkoutForm.reset();
    }

}
