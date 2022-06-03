import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { infoPagina } from '../interface/info-pagina.interface';
import { RouterLink } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info:infoPagina ={} //no deberia ser any
  cargada=false;
  equipo: any = [];

  constructor(private http:HttpClient) {

  this.cargarInfo();
  this.cargarEquipo();





  }
  
private cargarInfo(){ //Leer archivo de Json Interno
  this.http.get('assets/data/data.pagina.json')
  .subscribe(resp=> {
    this.cargada=true;
    this.info=resp;
  
  })
}
  private cargarEquipo(){
    this.http.get(' https://portfolio-tomas-html-ddbb-default-rtdb.europe-west1.firebasedatabase.app/equipo.json')
    .subscribe(resp=> {
      this.equipo=resp;
      console.log(resp)
    })

}
}


