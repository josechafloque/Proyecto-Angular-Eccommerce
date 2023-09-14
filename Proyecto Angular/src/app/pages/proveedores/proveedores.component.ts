import { Component } from '@angular/core';
import { Proveedor } from 'src/app/entities/proveedor';
import { ProveedoresService } from 'src/app/service/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent {
  precarga: Boolean = true;
  listaProveedores: Proveedor[] = [];
  listaProveedoresFiltrados: Proveedor[] = [];
  numeroPagina: number = 1;
  etiquetaColumna: string = "Empresa";
  nombreColumna: string = "nombreempresa";
  sentidoOrden = 1;

  constructor(private proveedorService: ProveedoresService) { }

  ngOnInit(): void {
    this.proveedorService.proveedoresSelect().subscribe(
      (res) => {
        console.log(res)
        this.listaProveedores = JSON.parse(JSON.stringify(res))
        this.listaProveedoresFiltrados = this.listaProveedores
        this.precarga = false;
      }
    )
  }

  buscar = (event: any) => {
    this.numeroPagina = 1;
    console.log(event.target.value);
    this.listaProveedoresFiltrados = this.listaProveedores.filter(fila =>
      eval("fila[this.nombreColumna]")?.toUpperCase().includes(event.target.value.toUpperCase()))
  }

  seleccionarColumna = (etiqueta: string, nombreColumna: string) => {
    //console.log(event.target.innerText);
    if(nombreColumna == this.nombreColumna){
      this.sentidoOrden = this.sentidoOrden*-1;
    }else{
      this.sentidoOrden = 1;
    }
    this.etiquetaColumna = etiqueta;
    this.nombreColumna = nombreColumna;
    this.listaProveedoresFiltrados.sort((a,b) => eval("a[this.nombreColumna] > b[this.nombreColumna]") ? this.sentidoOrden : -this.sentidoOrden);
  }
}
