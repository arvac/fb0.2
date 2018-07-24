
import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioProvider {
   usuario: Credenciales = {};
  constructor() {
    console.log('Hello UsuarioProvider Provider');
  }
 cargaruser( nombre:string,
 	         email:string,
 	         imagen:string,
 	         uid:string,
 	         phone:string,
 	         provider:string){
  this.usuario.nombre=nombre;
  this.usuario.email=email;
  this.usuario.imagen=imagen;
  this.usuario.uid=uid;
  this.usuario.provider=provider;
  this.usuario.phone=phone;


 }

}
 export interface Credenciales{
 	         nombre?:string;
 	         email?:string;
 	         imagen?:string;
 	         uid?:string;
 	         provider?:string;
 	         phone?:string;
 }