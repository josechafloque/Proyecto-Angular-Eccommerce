import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { misConstantes } from '../utils';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  constructor(private http: HttpClient) { }

  proveedoresSelect(){
    const ruta = misConstantes.rutaServicio + "proveedores.php";
    return this.http.get(ruta);
  }
}
