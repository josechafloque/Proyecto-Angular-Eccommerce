import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { misConstantes } from '../utils';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  constructor(private http: HttpClient) { }

  productosSelect(idcategoria: any){
    const ruta = misConstantes.rutaServicio + "productos.php?idcategoria=" + idcategoria;
    return this.http.get(ruta);
  }
  productoDetallesSelect(idproducto: any){
    const ruta = misConstantes.rutaServicio + "productos.php?idproducto=" + idproducto;
    return this.http.get(ruta);
  }
}
