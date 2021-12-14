import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Prueba } from '../prueba';
import { Usuario } from '../../usuario';
import { UsuarioService } from '../../usuario.service';
import { PruebaService } from '../prueba.service';

@Component({
  selector: 'app-prueba-estudiante',
  templateUrl: './prueba-estudiante.component.html',
  styleUrls: ['./prueba-estudiante.component.css']
})
export class PruebaEstudianteComponent implements OnInit {
  titulo : string = "Lista de pruebas";
  pruebas : Prueba[] = []; //Lista de pruebas
  usuarios : Usuario[] = []; //Lista de usuarios
  usuario : Usuario = new Usuario(); //Usario individual
  id? : number;
  curso? : string;
  filtro : string = '';
  fecha : Date = new Date();

  constructor(private servicioPrueba: PruebaService ,private activatedRoute:ActivatedRoute, 
    private router:Router, private toastr: ToastrService, private servicioUsuario : UsuarioService) { }

  ngOnInit() : void {
    this.capturar();
    this.cargar();    
  }

  cargar():void{
    this.servicioPrueba.getAll().subscribe(p => this.pruebas = p) 
  }

  capturar():void{
    this.activatedRoute.params.subscribe(
      p=> {
        this.id = p['id'];
        console.log("ID: ", p['id']);
        if(this.id){
          this.servicioUsuario.get(this.id).subscribe(u => this.curso = u.curso);
        }
    });    
  }

  busqueda(){        
    /*if(this.filtro.value != ''){
        for(let usuario of this.usuarios) {
            if(usuario.userID == this.filtro.value){
                this.usuarios = [usuario];
            }  
        }
    }
    else{
        this.listar(); 
    }*/
}

}
