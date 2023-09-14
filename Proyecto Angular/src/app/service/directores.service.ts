import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { misConstantes } from '../utils';

@Injectable({
  providedIn: 'root'
})
export class DirectoresService {

  constructor(private http: HttpClient) { }

  directoresSelect(){
    const ruta = misConstantes.rutaServicio + "directores.php";
    return this.http.get(ruta);
  }

  directoresInsert(nombres:string, peliculas:string){
    const ruta = misConstantes.rutaServicio + "directoresinsert.php";
    const formData: FormData = new FormData();
    formData.append("nombres", nombres);
    formData.append("peliculas", peliculas);

    return this.http.post(ruta, formData).pipe(
      map( res => {
        return res;
      })
    );
  }

  directoresUpdate(iddirector:string, nombres:string, peliculas:string){
    const ruta = misConstantes.rutaServicio + "directoresupdate.php";
    const formData: FormData = new FormData();
    formData.append("iddirector", iddirector);
    formData.append("nombres", nombres);
    formData.append("peliculas", peliculas);

    return this.http.post(ruta, formData).pipe(
      map( res => {
        return res;
      })
    );
  }

  directoresDelete(iddirector:string){
    const ruta = "https://servicios.campus.pe/directoresdelete.php";
    const formData: FormData = new FormData();
    formData.append("iddirector", iddirector);
    
    return this.http.post(ruta, formData).pipe(
      map( res => {
        return res;
      })
    );
  }

}
