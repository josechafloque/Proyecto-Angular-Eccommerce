import { ItemCarrito } from "../entities/itemcarrito";
import { Producto } from "../entities/producto";

export const misConstantes = {
    rutaServicio: "https://servicios.campus.pe/"
}

export const misMetodos = {
    agregarCarrito: function (productoSeleccionado: Producto, cantidadAgregada:any) {
        console.log(productoSeleccionado);
        let itemCarrito: ItemCarrito = {
            idproducto: productoSeleccionado.idproducto,
            nombre: productoSeleccionado.nombre,
            precio: productoSeleccionado.preciorebajado == 0 ? productoSeleccionado.precio : productoSeleccionado.preciorebajado,
            cantidad: cantidadAgregada
        }
        let carrito: ItemCarrito[] = [];
        if (sessionStorage.getItem("carritocompras") === null) {
            carrito.push(itemCarrito);
            sessionStorage.setItem("carritocompras", JSON.stringify(carrito));
        }
        else {
            let carritoStorage = sessionStorage.getItem("carritocompras") as string;
            carrito = JSON.parse(carritoStorage);
            let index = -1;
            for (let i = 0; i < carrito.length; i++) {
                if (itemCarrito.idproducto === carrito[i].idproducto) {
                    index = i;
                    break;
                }
            }
            if (index === -1) {
                carrito.push(itemCarrito);
                sessionStorage.setItem("carritocompras", JSON.stringify(carrito));
            }
            else {
                carrito[index].cantidad!++
                sessionStorage.setItem("carritocompras", JSON.stringify(carrito));
            }

        }
    }
}