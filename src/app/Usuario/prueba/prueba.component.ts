import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Prueba } from './prueba';
import { PruebaService } from './prueba.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {
  titulo : string = "Lista de pruebas";
  pruebas : Prueba[] = []; //Lista de pruebas
  id? : number;

  constructor(private servicioPrueba: PruebaService ,private activatedRoute:ActivatedRoute, 
    private router:Router, private toastr: ToastrService) { }

  ngOnInit() : void {
    this.cargar();
  }

  cargar():void{
    this.activatedRoute.params.subscribe(
    p=>{
      this.id = p['id'];
      if(this.id){
          this.servicioPrueba.getAllByUserID(this.id).subscribe(
            pra=>this.pruebas = pra
          );
        }
      }
    );
  }

  delete(id:any):void{
    this.servicioPrueba.delete(id).subscribe(data =>{
        this.toastr.error("La prueba fue eliminado con éxito", "Prueba eliminada correctamente.");
        this.cargar(); 
        }, error => {
            console.log(error);
        })
    }

}
