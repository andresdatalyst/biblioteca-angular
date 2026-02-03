import { MiFiltroPipe } from './../../pipe/mi-filtro.pipe';
import { LibrosComponent } from './libros.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { CreateLibroComponent } from './create-libro/create-libro.component';
import { EditarLibroComponent } from './editar-libro/editar-libro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';




@NgModule({
  declarations: [
    LibrosComponent,
    CreateLibroComponent,
    EditarLibroComponent,
    MiFiltroPipe
  ],
  imports: [
    CommonModule,
    LibrosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule


  ]
})
export class LibrosModule { }
