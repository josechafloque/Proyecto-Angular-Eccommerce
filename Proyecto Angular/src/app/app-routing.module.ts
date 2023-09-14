import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InversionesComponent } from './pages/inversiones/inversiones.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { ProductoDetallesComponent } from './pages/producto-detalles/producto-detalles.component';
import { DirectoresComponent } from './pages/directores/directores.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path:'', component:InicioComponent},
  {path:'inversiones', component:InversionesComponent},
  {path:'proveedores', component:ProveedoresComponent},
  {path:'directores', component:DirectoresComponent},
  {path:'empleados', component:EmpleadosComponent},
  {path:'tienda', component:TiendaComponent},
  {path:'carrito', component:CarritoComponent},
  {path:'login', component:LoginComponent},
  {path:'productodetalle/:idproducto', component:ProductoDetallesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
