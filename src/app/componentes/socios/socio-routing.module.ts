import { SociosComponent } from './socios.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditarLibroComponent } from '../libros/editar-libro/editar-libro.component';
import { EditarSocioComponent } from './editar-socio/editar-socio.component';

const routes: Routes = [
  {path:"",component:SociosComponent},
  {path:"Create", component:CreateComponent},
  {path:"Editar/:id", component:EditarSocioComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocioRoutingModule { }
