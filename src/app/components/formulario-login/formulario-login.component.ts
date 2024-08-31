import { Component, inject, Inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { log } from 'console';
import { AccesoService } from '../../services/acceso.service';

@Component({
  selector: 'app-formulario-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-login.component.html',
  styleUrl: './formulario-login.component.css'
})
export class FormularioLoginComponent {

  email: any = ""
  password: any = ""

  servicio = inject(AccesoService)
  usuarios = []

  ngOnInit() {

  }


  login(form: NgForm) {
   // console.log(form.value)
    this.servicio.logintUsuarios(form.value).subscribe(m => {
      console.log(m)
      if( m.accessToken != ""){
        localStorage.setItem('login', "true")
      }
    })
    
  }

}
