import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new FormGroup({
    usuario: new FormControl(),
    clave: new FormControl(),
  })

  iniciarSesion = (values:any) => {
    console.log(values);
  }
}
