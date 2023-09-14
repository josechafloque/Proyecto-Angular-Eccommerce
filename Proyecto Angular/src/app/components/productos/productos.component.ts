import { Component, Input } from '@angular/core';
import { Categoria } from 'src/app/entities/categoria';
import { ItemCarrito } from 'src/app/entities/itemcarrito';
import { Producto } from 'src/app/entities/producto';
import { ProductoDetalle } from 'src/app/entities/productodetalle';
import { ProductosService } from 'src/app/service/productos.service';
import { misConstantes, misMetodos } from 'src/app/utils';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  @Input() categoriaX: Categoria | undefined

  listaProductos: Producto[] = [];
  listaProductoDetalles: ProductoDetalle[] = [];
  rutaServicio = misConstantes.rutaServicio;

  constructor(private productoService: ProductosService) { }

  ngOnChanges(): void {
    console.log(this.categoriaX)
    if (this.categoriaX !== undefined) {
      this.productoService.productosSelect(this.categoriaX?.idcategoria).subscribe(
        (res) => {
          console.log(res)
          this.listaProductos = JSON.parse(JSON.stringify(res))
        }
      )
    }
  }

  agregarCarrito(productoSeleccionado: any) {
    misMetodos.agregarCarrito(productoSeleccionado,1);
  }

  mostrarDatosVistaRapida(idproducto: string) {
    console.log(idproducto);
    this.productoService.productoDetallesSelect(idproducto).subscribe(
      (res) => {
        console.log(res)
        this.listaProductoDetalles = JSON.parse(JSON.stringify(res))
      }
    )
  }
}
