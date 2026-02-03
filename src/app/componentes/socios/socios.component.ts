import { PrestamoService } from 'src/app/services/prestamo.service';
import { SocioService } from './../../services/socio.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.component.css']
})
export class SociosComponent implements OnInit {

  //Creo el array de socios para obtenerlo de la base de datos y poder recorrerlo
  socios : any[]=[];
  socio:any;

  constructor(private socioService:SocioService, private prestamoService: PrestamoService) { }

  //Obtenemos solo los socios con cuentasActivas
  ngOnInit(): void {
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
 //Ahora el método delete no borra de la base de datos el socio, si no que le cambia el campo
  public deleteSocio(id:any) {
    let editsuscribe = this.socioService.getSocio(id).subscribe((data:any)=>{
      this.socio=data.payload.data(); // aquí se coge el objeto entero de socio
      this.socio.cuentaActiva =false; // aquí altero la propiedad que quiera, en este caso el campo cuentaActiva
      this.socioService.updateSocio(id,this.socio); // hago un update de ese socio en la base de datos
      editsuscribe.unsubscribe();
    });

  }

}
