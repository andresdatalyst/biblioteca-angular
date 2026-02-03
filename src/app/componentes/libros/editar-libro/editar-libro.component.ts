import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Libro } from 'src/app/interfaces/libro';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-editar-libro',
  templateUrl: './editar-libro.component.html',
  styleUrls: ['./editar-libro.component.css']
})
export class EditarLibroComponent implements OnInit {

  libro?:Libro;
  titulo:any;
  foto:any;
  id:any;


  public newLibroForm = new FormGroup({
    titulo: new FormControl('', Validators.required),
    foto: new FormControl('', Validators.required),
    id: new FormControl(''),
    autor:new FormControl(''),
    categoria: new FormControl(''),
    description:new FormControl(''),
    numPag: new FormControl(''),
    editorial:new FormControl('')
});


  constructor(private firestoreService: LibroService, private activatedRoute:ActivatedRoute, public formBuilder: FormBuilder,private location:Location) { }

  ngOnInit(): void {

    //Capturo el id del libro para poder utilizar el servicio de editarLibro de firebase
    this.activatedRoute.paramMap.subscribe((params:ParamMap )=>{
      this.id=(<string>params.get("id"));

      console.log(this.id);
      //llamo al método de editar
      this.editLibro(this.id);
    });

}


  public editLibro(form:any, id = this.id) {
    let editSubscribe = this.firestoreService.getLibro(id).subscribe((data:any) => {
      console.log(data.payload.data())
      this.id = id;
      this.newLibroForm.setValue({
        id: this.id,
        titulo: data.payload.data()['titulo'],
        foto: data.payload.data()['foto'],
        autor: data.payload.data()['autor'],
        categoria: data.payload.data()['categoria'],
        description: data.payload.data()['description'],
        numPag: data.payload.data()['numPag'],
        editorial: data.payload.data()['editorial'],
      });
      data = {
        titulo: form.titulo,
        foto: form.foto,
        autor: form.autor,
        categoria: form.categoria,
        description: form.description,
        numPag: form.numPag,
        editorial: form.editorial,
      }

      this.firestoreService.updateLibro(id, data).then(() => {
        alert("Libro editado con éxito")

        this.location.back();
      }, (error) => {
        console.log(error);
      });

      editSubscribe.unsubscribe();
    });
  }

  }



