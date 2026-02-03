import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router, Routes } from '@angular/router';
import { SocioService } from 'src/app/services/socio.service';

@Component({
  selector: 'app-editar-socio',
  templateUrl: './editar-socio.component.html',
  styleUrls: ['./editar-socio.component.css']
})
export class EditarSocioComponent implements OnInit {
  id:any;
  public newSocioForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required),
    id: new FormControl(''),
    edad:new FormControl(''),
    pais: new FormControl(''),
    nick: new FormControl('')

  });

  constructor(private socioService:SocioService, private activatedRoute:ActivatedRoute, private location:Location) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap )=>{
      this.id=(<string>params.get("id"));

      this.editSocio(this.id);
    });
  }
  public editSocio(form:any, id = this.id) {
    let editSubscribe = this.socioService.getSocio(id).subscribe((data:any) => {
      console.log(data.payload.data())
      this.id = id;
      this.newSocioForm.setValue({
        id: this.id,
        nombre: data.payload.data()['nombre'],
        apellidos: data.payload.data()['apellidos'],
        edad: data.payload.data()['edad'],
        pais: data.payload.data()['pais'],
        nick: data.payload.data()['nick']

      });
      data = {
        nombre: form.nombre,
        apellidos: form.apellidos,
        edad:form.edad,
        pais:form.pais,
        nick:form.nick
      }

      this.socioService.updateSocio(id, data).then(() => {
        alert("has editado correctamente")
       this.location.back();
      }, (error) => {
        console.log(error);
      });



      editSubscribe.unsubscribe();
    });
  }

}
