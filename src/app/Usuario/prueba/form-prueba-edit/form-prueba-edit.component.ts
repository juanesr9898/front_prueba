import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Prueba } from '../prueba';
import { PruebaService } from '../prueba.service';

@Component({
  selector: 'app-form-prueba-edit',
  templateUrl: './form-prueba-edit.component.html',
  styleUrls: ['./form-prueba-edit.component.css']
})
export class FormPruebaEditComponent implements OnInit {
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
    this.cargar()
  }

  hidden():void{ 
      this.update(this.id); 
      console.log("ID Docente : ", this.docenteID);  
      console.log("ID : ", this.id);
      this.toastr.success("Actualización de datos correcta", "Actualización Éxitosa");
      this.router.navigate(['/usuarios/prueba', this.docenteID]);
  }

  cargar():void{
    this.activatedRoute.params.subscribe(
    u=>{
      this.id=u['id'];
      console.log(this.id)
        if(this.id){  
          this.servicioPrueba.get(this.id).subscribe(
            res => this.prueba = res
            );
          this.docenteID = this.prueba.docenteID;
        }
      }
    );
  }

  limpiar():void{
    this.checkoutForm.reset();
  }

  update(id:number):void{
    this.docenteID = this.prueba.docenteID;
    this.servicioPrueba.update(id,this.prueba).subscribe(
      res=>this.router.navigate(['/usuarios/prueba',this.docenteID])
    );
  }

}
