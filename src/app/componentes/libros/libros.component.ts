import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/interfaces/libro';
import { LibroService } from 'src/app/services/libro.service';


@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  libros:any[] = [];
  id:any;
  titulo:any;
  libro:any;


  constructor(private firestoreService: LibroService, private router:Router) {

   }

  ngOnInit(): void {

    //Obtenemos la lista de libros que esten activos
    this.firestoreService.getLibrosActivos().subscribe((librosSnapshot) => {
      this.libros = [];
      librosSnapshot.forEach((libroData) => {
        this.libros.push({
          id: libroData.payload.doc.id,
          data: libroData.payload.doc.data()
        });
      })
    });
  }

  //Método para borrar un libro, llamada en el (click)
  public deleteLibro(id:any) {
    let editsuscribe = this.firestoreService.getLibro(id).subscribe((data:any)=>{
      this.libro=data.payload.data(); // aquí se coge el objeto entero de libro
      this.libro.prestado =true; // cambio prestado igual a true, para que al hacer el préstamo no aperezcan los libros
      this.libro.libroActivo=false;//Lo ponemos en false para que no salga en la lista
      this.firestoreService.updateLibro(id,this.libro); // hago un update de ese libro en la base de datos
      editsuscribe.unsubscribe();
    });
  }
//Método busqueda de libro
  public buscar(){

    this.firestoreService.getLibrosPorNombre(this.titulo).subscribe((librosSnapshot) => {
      this.libros = [];
      librosSnapshot.forEach((libroData) => {
        this.libros.push({
          id: libroData.payload.doc.id,
          data: libroData.payload.doc.data()
        });
      })
    });

  }


}
