import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from "@angular/forms"; 
import { FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './Usuario/usuario.component';
import { FormUsuarioComponent } from './Usuario/Form/form-usuario.component';
import { PruebaComponent } from './Usuario/prueba/prueba.component';
import { FormPruebaComponent } from './Usuario/prueba/form/form-prueba.component';
import { FormPruebaEditComponent } from './Usuario/prueba/form-prueba-edit/form-prueba-edit.component';
import { FilterPipe } from './pipes/filter.pipe';
import { PruebaEstudianteComponent } from './Usuario/prueba/prueba-estudiante/prueba-estudiante.component';
//import { MaterialModule } from '@angular/material';
import { DatePickerModule } from 'angular-material-datepicker';


//Declaración de rutas y de modules
const routes:Routes =[
  { path:'', redirectTo:'/usuarios', pathMatch:'full' },
  { path:'usuarios', component:UsuarioComponent },
  { path:'usuarios/form', component:FormUsuarioComponent },
  { path:'usuarios/form/:id', component:FormUsuarioComponent },
  { path:'usuarios/prueba/:id', component:PruebaComponent },
  { path:'usuarios/prueba', component:PruebaComponent },
  { path:'usuarios/prueba/:id/form', component:FormPruebaComponent },
  { path:'usuarios/prueba/form/:id', component:FormPruebaComponent },
  { path:'usuarios/prueba/form/edit/:id', component:FormPruebaEditComponent },
  { path:'usuarios/pruebas/:id', component:PruebaEstudianteComponent }  
]

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    FormUsuarioComponent,
    PruebaComponent,
    FormPruebaComponent,
    FormPruebaEditComponent,
    FilterPipe,
    PruebaEstudianteComponent
  ],
  imports: [
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    DatePickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
