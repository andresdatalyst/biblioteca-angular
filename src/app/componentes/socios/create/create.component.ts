import { SocioService } from './../../../services/socio.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

 // El crear libro y socio son muy similares, solo he cambiado el nombre del formulario reactivo y sus campos, pero la metodología es la misma
  public newSocioForm = new FormGroup({
  nombre: new FormControl('', Validators.required),
  apellidos: new FormControl('', Validators.required),
  id: new FormControl(''),
  edad:new FormControl('', Validators.required),
  pais: new FormControl('', Validators.required),
  nick: new FormControl('', Validators.required)

});
  constructor(private socioService:SocioService, private location:Location, private router:Router) {
    this.newSocioForm.setValue({
      id: '',
      nombre: '',
      apellidos: '',
      edad:'',
      pais: '',
      nick:''

    });
   }

  ngOnInit(): void {

  }
  public newSocio(form:any) {

    let data = {
      nombre: form.nombre,
      apellidos: form.apellidos,
      edad:form.edad,
      pais:form.pais,
      nick:form.nick,
      activo:false,
      cuentaActiva:true
    }

this.socioService.createSocio(data).then(() => {
  alert('Documento creado exitósamente!');
  this.router.navigateByUrl("/socios");

}, (error) => {
  console.error(error);
});

}
}
