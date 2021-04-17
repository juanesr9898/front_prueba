import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from "@angular/forms"; 
import { FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './Usuario/usuario.component';
import { FormUsuarioComponent } from './Usuario/form-usuario.component';

const routes:Routes =[
  {path:'', redirectTo:'/usuarios', pathMatch:'full' },
  {path:'usuarios', component:UsuarioComponent },
  {path:'usuarios/form', component:FormUsuarioComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    FormUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
