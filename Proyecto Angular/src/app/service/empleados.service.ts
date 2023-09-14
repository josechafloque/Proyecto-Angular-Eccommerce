import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { misConstantes } from '../utils';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private http: HttpClient) { }

  empleadosSelect(){
    const ruta = misConstantes.rutaServicio + "empleados.php";
    return this.http.get(ruta);
  }
}
