import { CreateLibroComponent } from './create-libro/create-libro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibrosComponent } from './libros.component';
import { EditarLibroComponent } from './editar-libro/editar-libro.component';


const routes: Routes = [
  {path:"",component:LibrosComponent},
  {path:"Create", component:CreateLibroComponent},
  {path:"Editar/:id",component:EditarLibroComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibrosRoutingModule { }
