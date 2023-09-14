import { Component } from '@angular/core';
import { Categoria } from 'src/app/entities/categoria';
import { CategoriasService } from 'src/app/service/categorias.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent {
  listaCategorias: Categoria[] = [];
  categoriaSeleccionada: Categoria | undefined;
  constructor( private categoriaService: CategoriasService){}

  ngOnInit(): void {
    this.categoriaService.categoriasSelect().subscribe(
      (res) =>{
        console.log(res)
        this.listaCategorias = JSON.parse(JSON.stringify(res))
        this.seleccionarCategoria(this.listaCategorias[0])
      }
    )
  }

  seleccionarCategoria(itemSeleccionado: Categoria){
    console.log(itemSeleccionado);
    this.categoriaSeleccionada = itemSeleccionado;
  }
}
