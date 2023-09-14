import { Component } from '@angular/core';
import { Envio } from 'src/app/entities/envio';
import { EnviosService } from 'src/app/service/envios.service';

@Component({
  selector: 'app-envios',
  templateUrl: './envios.component.html',
  styleUrls: ['./envios.component.css']
})
export class EnviosComponent {
  mensaje = "Solo sé que nada sé";
  listaEnvios: Envio[] = [];
  constructor( private enviosService: EnviosService){}

  ngOnInit(): void {
    this.enviosService.enviosSelect().subscribe(
      (res) =>{
        //console.log(res)
        this.listaEnvios = JSON.parse(JSON.stringify(res))
      }
    )
  }
}
