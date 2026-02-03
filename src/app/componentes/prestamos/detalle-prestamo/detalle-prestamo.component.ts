import { SocioService } from './../../../services/socio.service';
import { PrestamoService } from 'src/app/services/prestamo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { LibroService } from 'src/app/services/libro.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalle-prestamo',
  templateUrl: './detalle-prestamo.component.html',
  styleUrls: ['./detalle-prestamo.component.css']
})
export class DetallePrestamoComponent implements OnInit {

  id:any;
  libro:any;
  libroID:any;
  socio:any;
  socioID:any;
  prestamo:any;


  constructor( private prestamoService:PrestamoService,
    private activatedRoute: ActivatedRoute,
    private libroService: LibroService,
    private socioService:SocioService,
    private location:Location) { }

  ngOnInit(): void {
    //Cojo la id del préstamo en la url
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.id = <string>params.get('id');

      this.prestamoService.getPrestamo(this.id).subscribe((data: any) => {
        this.prestamo=data.payload.data();
        console.log(this.prestamo);
        //Obtengo el libroID de la data del préstamo seleccionado
        this.libroID= data.payload.data()['libroID'];
        //Obtengo el socioID de la data del préstamo seleccionado
        this.socioID=data.payload.data()['socioID'];
        //Teniendo ambos id puedo usar los respectivos servicios de libro y socio para obtener el objeto en cuestión y poder mostrarlo en el html o editar el objeto y updatearlo
        this.libroService.getLibro(this.libroID).subscribe((data:any)=>{
          this.libro = data.payload.data();
        this.socioService.getSocio(this.socioID).subscribe((data:any)=>{
          this.socio = data.payload.data();
        })
        })


      });
    });
  }

 public eliminarPrestamo(id:string){

  this.prestamo.fechaFin=new Date();
    this.prestamoService.updatePrestamo(id,this.prestamo).then(()=>
    alert("Préstamo devuelto")
    );
    //Cambio el campo prestado a false después de eliminar el prestamo y lo actualizo
    this.libro.prestado=false;
    this.libroService.updateLibro(this.libroID,this.libro);
    //Cambio el campo activo a false después de eliminar el prestamo y lo actualizo
    this.socio.activo=false;
    this.socioService.updateSocio(this.socioID,this.socio)
    this.location.back();


 /* public eliminarPrestamo(prestamo: any){
    let eliminarSuscribe = this.libroService.getLibro(prestamo.data.libro).subscribe(libro => {
      this.libro = {
        id: prestamo.data.libro,
        data: libro.payload.data()
      }

      console.log(this.libro);
      this.libro.data.prestado = false
      prestamo.data.fechaDevolucion = new Date();
      this.libroService.updateLibro(this.libro.id, this.libro.data).then(() => {})
      this.prestamoService.updatePrestamo(prestamo.id, prestamo.data).then(() => {})
      alert('Prestamo devuelto correctamente');
      eliminarSuscribe.unsubscribe()
      this.location.back();

      console.log(this.libro)



    }) ;

  }*/


}
}
