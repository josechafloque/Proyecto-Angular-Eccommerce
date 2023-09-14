import { Component } from '@angular/core';
import { ItemCarrito } from 'src/app/entities/itemcarrito';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  listaItemsCarrito: ItemCarrito[] = [];
  total = 0;
  ngOnInit(): void {
    let carritoStorage = sessionStorage.getItem("carritocompras") as string;
    let carrito = JSON.parse(carritoStorage);
    this.listaItemsCarrito = carrito;
    this.calcularTotal();
  }

  vaciarCarrito = () => {
    this.listaItemsCarrito = [];
    sessionStorage.removeItem("carritocompras");
    this.calcularTotal();
  }

  eliminarItem = (itemcarrito: ItemCarrito) => {
    let carritoMenos = this.listaItemsCarrito.filter(itemCart => itemCart.idproducto !== itemcarrito.idproducto);
    this.listaItemsCarrito = carritoMenos;
    sessionStorage.setItem("carritocompras", JSON.stringify(carritoMenos));
    this.calcularTotal();
  }

  calcularTotal = () => {
    this.total = this.listaItemsCarrito.reduce((acumulador, fila) => acumulador + fila["precio"]! * fila["cantidad"]! , 0)
  }

  actualizarCantidad = (event: any, indice: number) => {
    console.log(event.target.value);
    this.listaItemsCarrito[indice].cantidad = event.target.value;
    sessionStorage.setItem("carritocompras", JSON.stringify(this.listaItemsCarrito));
    this.calcularTotal();
  }
}
