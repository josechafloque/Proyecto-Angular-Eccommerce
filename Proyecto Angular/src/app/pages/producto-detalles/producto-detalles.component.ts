import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDetalle } from 'src/app/entities/productodetalle';
import { ProductosService } from 'src/app/service/productos.service';
import { misConstantes, misMetodos } from 'src/app/utils';

@Component({
  selector: 'app-producto-detalles',
  templateUrl: './producto-detalles.component.html',
  styleUrls: ['./producto-detalles.component.css']
})
export class ProductoDetallesComponent {
  constructor(
    private activateRoute: ActivatedRoute,
    private productoService: ProductosService
  ) { }
  listaProductos: ProductoDetalle[] = [];
  rutaServicio = misConstantes.rutaServicio;
  cantidad = 1;
  ngOnInit(): void {
    this.activateRoute.params.subscribe(
      params => {
        const idproducto = params["idproducto"]
        console.log(idproducto);
        this.leerProducto(idproducto)
      }
    )
  }

  leerProducto(idproducto: String) {
    this.productoService.productoDetallesSelect(idproducto).subscribe(
      (res) => {
        console.log(res)
        this.listaProductos = JSON.parse(JSON.stringify(res))
      }
    )
  }

  agregarCarrito(productoSeleccionado: any) {
    misMetodos.agregarCarrito(productoSeleccionado, this.cantidad);
  }

  actualizarCantidad (event:any){
    this.cantidad = event.target.value
  }

}
