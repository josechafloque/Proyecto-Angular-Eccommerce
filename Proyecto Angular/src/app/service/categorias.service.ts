import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { misConstantes } from '../utils';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }

  categoriasSelect(){
    const ruta = misConstantes.rutaServicio + "categorias.php";
    return this.http.get(ruta);
  }
}
