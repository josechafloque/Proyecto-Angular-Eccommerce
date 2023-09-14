import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './common/main-header/main-header.component';
import { MainFooterComponent } from './common/main-footer/main-footer.component';
import { NosotrosComponent } from './home/nosotros/nosotros.component';
import { NoticiasComponent } from './home/noticias/noticias.component';
import { HistoriaComponent } from './home/historia/historia.component';
import { MainBannerComponent } from './home/main-banner/main-banner.component';
import { MainNavComponent } from './common/main-nav/main-nav.component';
import { InversionesComponent } from './pages/inversiones/inversiones.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { EnviosComponent } from './home/envios/envios.component';
import { ProductosComponent } from './components/productos/productos.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { ProductoDetallesComponent } from './pages/producto-detalles/producto-detalles.component';
import { DirectoresComponent } from './pages/directores/directores.component';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from './pages/login/login.component'; 

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainFooterComponent,
    NosotrosComponent,
    NoticiasComponent,
    HistoriaComponent,
    MainBannerComponent,
    MainNavComponent,
    InversionesComponent,
    ProveedoresComponent,
    EmpleadosComponent,
    TiendaComponent,
    InicioComponent,
    EnviosComponent,
    ProductosComponent,
    CarritoComponent,
    ProductoDetallesComponent,
    DirectoresComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
