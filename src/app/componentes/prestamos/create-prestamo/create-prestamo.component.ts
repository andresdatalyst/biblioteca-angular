import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LibroService } from 'src/app/services/libro.service';
import { PrestamoService } from 'src/app/services/prestamo.service';
import { SocioService } from 'src/app/services/socio.service';

@Component({
  selector: 'app-create-prestamo',
  templateUrl: './create-prestamo.component.html',
  styleUrls: ['./create-prestamo.component.css']
})
export class CreatePrestamoComponent implements OnInit {

  libros:any[]=[];
  socios:any[]=[];


  libro:any;
  socio:any;

  public newPrestamoForm = new FormGroup({
    libroID: new FormControl('', Validators.required),
    socioID: new FormControl('', Validators.required),
    fecha:new FormControl(''),
    fechaFin: new FormControl(''),
    id: new FormControl('')
  })

  constructor(private libroService:LibroService, private socioService:SocioService,private prestamoService:PrestamoService, private router :Router) { }

  ngOnInit(): void {

    //Captura del array con libros no prestados y que esten disponibles
    this.libroService.getLibrosNoPrestados().subscribe((librosSnapshot) => {
      this.libros = [];
      librosSnapshot.forEach((libroData) => {
        this.libros.push({
          id: libroData.payload.doc.id,
          data: libroData.payload.doc.data()
        });
      })
    });

    //Captura de array de socios cuentaActiva
    this.socioService.getSociosCuentaActiva().subscribe((SociosSnapshot) => {
      this.socios = [];
      SociosSnapshot.forEach((socioData) => {
        this.socios.push({
          id: socioData.payload.doc.id,
          data: socioData.payload.doc.data()
        });
      })
    });


  }

  public newPrestamo(form:any){
    this.libro=this.libros.find(l=> l.id==form.libroID);
    this.socio=this.socios.find(s=> s.id==form.socioID);
    let data ={
      libroID:form.libroID,
      socioID:form.socioID,
      fecha:new Date(),// la fecha la pongo a la hora del sistema cuando se pulsa en crear préstamo
      fechaFin:null,
      nombreLibro:this.libro.data.titulo,
      nombreSocio:this.socio.data.nombre
    }

    //Tras guardar la data de préstamo, llamo al método cambiaPrestadoLibro, como ya tengo la id del libro a través de la data mi intención
    //es cambiar la propiedad de prestado en la base de datos de libro, para que esta cambia al momento de hacer el préstamo
    this.cambiaPrestadoLibro(data.libroID);
    this.cambiaActivoSocio(data.socioID);

    this.prestamoService.createPrestamo(data).then(()=>{
      alert("Préstamo creado con éxito");
      this.router.navigateByUrl("/prestamos")
    }, (error) =>{
      console.error(error);
    }
    )
  }

  // Realización del método
  public cambiaPrestadoLibro(id:any){

    let editsuscribe = this.libroService.getLibro(id).subscribe((data:any)=>{
      this.libro=data.payload.data(); // aquí se coge el objeto entero de libro
      this.libro.prestado =true; // aquí altero la propiedad que quiera, en este caso el campo prestado
      this.libroService.updateLibro(id,this.libro); // hago un update de ese libro en la base de datos
      editsuscribe.unsubscribe();
    });

  }

  public cambiaActivoSocio(id:any){

    let editsuscribe = this.socioService.getSocio(id).subscribe((data:any)=>{
      this.socio=data.payload.data(); // aquí se coge el objeto entero de socio
      this.socio.activo =true; // aquí altero la propiedad que quiera, en este caso el campo activo
      this.socioService.updateSocio(id,this.socio); // hago un update de ese socio en la base de datos
      editsuscribe.unsubscribe();
    });



  }




}
