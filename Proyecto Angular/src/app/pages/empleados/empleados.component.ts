import { Component } from '@angular/core';
import { Empleado } from 'src/app/entities/empleado';
import { EmpleadosService } from 'src/app/service/empleados.service';
import { misConstantes } from 'src/app/utils';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent {
  listaEmpleados: Empleado[] = [];
  rutaServicio = misConstantes.rutaServicio;
  constructor( private empleadoService: EmpleadosService){}

  ngOnInit(): void {
    this.empleadoService.empleadosSelect().subscribe(
      (res) =>{
        console.log(res)
        this.listaEmpleados = JSON.parse(JSON.stringify(res))
      }
    )
  }
}