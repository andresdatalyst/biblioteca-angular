import { AngularMaterialModule } from './../../angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrestamoRoutingModule } from './prestamo-routing.module';
import { CreatePrestamoComponent } from './create-prestamo/create-prestamo.component';
import { PrestamosComponent } from './prestamos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetallePrestamoComponent } from './detalle-prestamo/detalle-prestamo.component';


@NgModule({
  declarations: [PrestamosComponent,
    CreatePrestamoComponent,
    DetallePrestamoComponent,],
  imports: [
    CommonModule,
    PrestamoRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PrestamoModule { }
