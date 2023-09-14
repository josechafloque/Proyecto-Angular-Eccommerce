import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { misConstantes } from '../utils';

@Injectable({
  providedIn: 'root'
})
export class EnviosService {

  constructor(private http: HttpClient) { }

  enviosSelect(){
    const ruta = misConstantes.rutaServicio + "servicioenvios.php";
    return this.http.get(ruta);
  }
}
