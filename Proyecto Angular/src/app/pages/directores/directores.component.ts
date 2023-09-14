import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Director } from 'src/app/entities/director';
import { DirectoresService } from 'src/app/service/directores.service';

@Component({
  selector: 'app-directores',
  templateUrl: './directores.component.html',
  styleUrls: ['./directores.component.css']
})
export class DirectoresComponent {

  listaDirectores: Director[] = [];

  directorActualizar: Director | undefined;
  directorEliminar: Director | undefined;

  directoresInsertForm = new FormGroup({
    nombres: new FormControl(),
    peliculas: new FormControl(),
  })

  directoresUpdateForm = new FormGroup({
    iddirector: new FormControl(),
    nombres: new FormControl(),
    peliculas: new FormControl(),
  })

  directoresDeleteForm = new FormGroup({
    iddirector: new FormControl(),
  })

  constructor(private directoresService: DirectoresService) { }

  ngOnInit(): void {
    this.directoresService.directoresSelect().subscribe(
      (res) => {
        console.log(res);
        this.listaDirectores = JSON.parse(JSON.stringify(res));

      }
    )
  }

  directoresInsert(values: any) {
    console.log(values);
    this.directoresService.directoresInsert(values.nombres, values.peliculas).subscribe(
      (res) => {
        console.log(res);
        this.ngOnInit();
        document.getElementById("btnGuardarCancelar")?.click()
        this.directoresInsertForm.reset();
      }
    )
  }
  directoresUpdate(values: any) {
    console.log(values);
    this.directoresService.directoresUpdate(values.iddirector, values.nombres, values.peliculas).subscribe(
      (res) => {
        console.log(res);
        this.ngOnInit();
        document.getElementById("btnActualizarCancelar")?.click()
        this.directoresUpdateForm.reset();
      }
    )
  }

  directoresDelete(values: any) {
    console.log(values);
    this.directoresService.directoresDelete(values.iddirector).subscribe(
      (res) => {
        console.log(res);
        this.ngOnInit();
        document.getElementById("btnEliminarCancelar")?.click()
        this.directoresDeleteForm.reset();
      }
    )
  }

  editDirector(item: Director) {
    console.log(item);
    this.directorActualizar = item;
  }

  deleteDirector(item: Director) {
    console.log(item);
    this.directorEliminar = item;
  }

}
