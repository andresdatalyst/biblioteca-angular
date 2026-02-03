import { PrestamoService } from './../../services/prestamo.service';
import { Component, OnInit } from '@angular/core';
import { LibroService } from 'src/app/services/libro.service';
import { SocioService } from 'src/app/services/socio.service';
import { FormControl, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.css']
})
export class PrestamosComponent implements OnInit {


  prestamos:any[]=[];

  constructor(private prestamoService:PrestamoService) {
  }


  ngOnInit(): void {

    this.prestamoService.obtenerPrestamoNoDevuelto().subscribe((PrestadosSnapshot) => {
      this.prestamos = [];
      PrestadosSnapshot.forEach((prestadoData) => {
        this.prestamos.push({
          id: prestadoData.payload.doc.id,
          data: prestadoData.payload.doc.data()
        });
      })
    });

  }








}
