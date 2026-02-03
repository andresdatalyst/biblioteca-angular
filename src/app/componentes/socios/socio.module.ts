import { SociosComponent } from './socios.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SocioRoutingModule } from './socio-routing.module';
import { CreateComponent } from './create/create.component';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { EditarSocioComponent } from './editar-socio/editar-socio.component';





@NgModule({
  declarations: [SociosComponent, CreateComponent, EditarSocioComponent],
  imports: [
    CommonModule,
    SocioRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,


  ]
})
export class SocioModule { }
