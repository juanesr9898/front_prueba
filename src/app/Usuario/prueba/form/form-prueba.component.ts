import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Prueba } from '../prueba';
import { PruebaService } from '../prueba.service';
import { Usuario } from '../../usuario';
import { UsuarioService } from '../../usuario.service';

@Component({
  selector: 'app-form-prueba',
  templateUrl: './form-prueba.component.html',
  styleUrls: ['./form-prueba.component.css']
})
export class FormPruebaComponent implements OnInit {
  prueba : Prueba = new Prueba(); //Prueba individual
  usuario : Usuario = new Usuario(); //usario individual
  usuarios : Usuario[] = []; //lista de usuarios   
  confirmText : string = "Crear";
  id : number = 0;
  docenteID? : number;
  curso? : string;
  pruebas : Prueba[] = [];


  checkoutForm = this.formBuilder.group({
    descripcion: ['', Validators.required],
    enlace: ['', Validators.required],
    materia: ['', Validators.required]
    }
  );

  constructor(private servicioPrueba: PruebaService ,private formBuilder: FormBuilder,
    private activatedRoute:ActivatedRoute, private router:Router, private toastr: ToastrService,
    private servicioUsuario: UsuarioService) { }

  ngOnInit(): void {
    this.servicioUsuario.getAll().subscribe(u => this.usuarios = u );
  }

  hidden():void{  
    this.create(); 
  }

  limpiar():void{
    this.checkoutForm.reset();
  }

  create():void{
    this.activatedRoute.params.subscribe(
      p=>{
        this.docenteID = p['id'];
      });
      for(let user of this.usuarios){
        console.log(user.curso)
        if(user.userID === this.docenteID){
          this.prueba.curso = user.curso;
          console.log(this.prueba.curso);
        }
      }
    this.prueba.docenteID = this.docenteID;  
    this.prueba.curso = this.curso;
    this.servicioPrueba.create(this.prueba).subscribe(  
      res=>this.router.navigate(['/usuarios/prueba',this.docenteID])
    );
    this.toastr.success("Una nueva prueba se ha creado", "Prueba creada con éxito");
  }

}
