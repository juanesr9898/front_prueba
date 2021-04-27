import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Prueba } from '../prueba';
import { PruebaService } from '../prueba.service';

@Component({
  selector: 'app-form-prueba',
  templateUrl: './form-prueba.component.html',
  styleUrls: ['./form-prueba.component.css']
})
export class FormPruebaComponent implements OnInit {
  prueba : Prueba = new Prueba(); //Prueba individual
  confirmText : string = "Crear";
  id : number = 0;
  docenteID? : number;
  pruebas : Prueba[] = [];


  checkoutForm = this.formBuilder.group({
    descripcion: ['', Validators.required],
    enlace: ['', Validators.required],
    materia: ['', Validators.required]
    }
  );

  constructor(private servicioPrueba: PruebaService ,private formBuilder: FormBuilder,
    private activatedRoute:ActivatedRoute, private router:Router, private toastr: ToastrService) { }

  ngOnInit(): void {
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
    this.prueba.docenteID = this.docenteID;    
    this.servicioPrueba.create(this.prueba).subscribe(  
      res=>this.router.navigate(['/usuarios/prueba',this.docenteID])
    );
    this.toastr.success("Una nueva prueba se ha creado", "Prueba creada con éxito");
  }

}
