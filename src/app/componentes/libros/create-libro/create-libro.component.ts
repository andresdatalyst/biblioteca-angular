import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-create-libro',
  templateUrl: './create-libro.component.html',
  styleUrls: ['./create-libro.component.css']
})
export class CreateLibroComponent implements OnInit {



  //Creación del formulario reactivo
  public newLibroForm = new FormGroup({
  titulo: new FormControl('', Validators.required),
  foto: new FormControl('', Validators.required),
  id: new FormControl(''),
  autor:new FormControl('', Validators.required),
  categoria: new FormControl('', Validators.required),
  description:new FormControl('', Validators.required),
  numPag: new FormControl('', Validators.required),
  editorial:new FormControl('', Validators.required)

});
  constructor(private firestoreService: LibroService, private location:Location, private router:Router) {
    this.newLibroForm.setValue({
      id: '',
      titulo: '',
      foto: '',
      autor:'',
      categoria: '',
      description:'',
      numPag: '',
      editorial:''
    });
   }

  ngOnInit(): void {

  }

  //Método de creación de libro, cogiendo los datos del formularío y pasarlo como data al servicio de firebase de createLibro
  public newLibro(form:any) {

      let data = {
        titulo: form.titulo,
        foto: form.foto,
        autor:form.autor,
        categoria:form.categoria,
        description:form.description,
        numPag:form.numPag,
        editorial:form.editorial,
        prestado:false,
        libroActivo:true
      }

  this.firestoreService.createLibro(data).then(() => {
    alert('¡Libro creado con exitó!');
    this.router.navigateByUrl("/libros");

  }, (error) => {
    console.error(error);
  });

  }
}


