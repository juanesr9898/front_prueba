import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
    selector: 'app-form-usuario',
    templateUrl: './form-usuario.component.html',
    styleUrls: ['./form-usuario.component.css']
  }
)

export class FormUsuarioComponent implements OnInit {
  usuario : Usuario = new Usuario(); //usario individual
  usuarios : Usuario[] = []; //lista de usuarios
  titulo : string = "Registro Usuarios";
  loginText : string = "Login";
  question : string = "¿No te has registrado aún?";
  reg : string = "Registro";
  banderaSH : boolean = true;
  banderaS : boolean = true;
  bandera : boolean = true;
  banderaL : boolean = true;
  validate : boolean = false;
  id :number = 0;
  banderae : boolean = false;
  new :boolean = false;

  checkoutForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      userID: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      curso: ['', Validators.required],
      materias: ['', Validators.required],
      grupos: ['', Validators.required],
      tipoUsuario: ['', Validators.required]
      }
    );

  constructor(private servicioUsuario: UsuarioService, private router:Router, 
    private formBuilder: FormBuilder, private activatedRoute:ActivatedRoute,
    private toastr: ToastrService) {}

  ngOnInit(): void {
    this.banderae = false;
    this.hidden();
    this.cargar();
    this.servicioUsuario.getAll().subscribe(u => this.usuarios = u );
  }

  // Función que muestra/oculta atributos dependiendo si quiere logearse o registrarse
  showHidden():void{
    this.validate = true; 
    //Condicional de registro
    if( this.loginText === "Login") {    
      if(this.bandera === false){
        this.checkoutForm.reset();
      }
      this.loginText = "Registro"; 
      this.question = "¿Ya estas registrado?";
      this.reg = "Login";
      this.banderaSH = false;
    } 
    //Condicional de login
    else {
      if(this.bandera === false){
        this.checkoutForm.reset();
      }
      this.loginText = "Login";
      this.question = "¿No te has registrado aún?";
      this.reg = "Registro";
      this.banderaSH = true;
      this.banderaS = true;
      this.validate = true; 
    }

  }

  hidden():void{
    if( this.loginText === "Registro" ) {   
        this.create(); 
      } 
    if(this.router.url == "/usuarios/form/%23" || this.router.url == "/usuarios/form"){
      this.validate = true; 
    }
    if( this.loginText === "Update" ) {   
      this.banderaS = false;
      this.update(this.id); 
      this.toastr.success("Actualización de datos correcta", "Actualización Éxitosa");
      this.router.navigate(['/usuarios']);
    } 
  }

  create():void{
    for(let user of this.usuarios){
      if(user.userID == this.usuario.userID){
        this.toastr.error("Error esa UserID ya existe", "Error USERID");
        this.banderae = true;
      }
    }
    if(this.banderae == false){
      this.toastr.success("Un nuevo usuario se ha creado", "Usuario añadido con éxito");
      this.servicioUsuario.create(this.usuario).subscribe(  
        res=>this.router.navigate(['/usuarios'])
        );
        this.banderaS = false;
        this.checkoutForm.reset();
    }
  }

  show():void{
    this.bandera = false;
    this.new = false;
  }

  limpiar():void{
    this.checkoutForm.reset();
  }
  
  cargar():void{
    this.activatedRoute.params.subscribe(
    u=>{
      let id=u['id'];
      if(id){
        if(this.validate==false){
          this.bandera = false;
          this.banderaL = false;
          this.banderaSH = false;
          this.loginText = "Update";
          this.question = "";
          this.reg = "";
          this.id = id;
          this.servicioUsuario.get(id).subscribe(
            user=>this.usuario=user
          );
        }
      }
      }
    );
  }

  update(id:number):void{
    this.servicioUsuario.update(id,this.usuario).subscribe(
      res=>this.router.navigate(['/usuarios'])
    );

  }
}
