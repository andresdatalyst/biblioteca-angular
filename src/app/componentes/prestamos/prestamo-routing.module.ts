import { DetallePrestamoComponent } from './detalle-prestamo/detalle-prestamo.component';
import { CreatePrestamoComponent } from './create-prestamo/create-prestamo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrestamosComponent } from './prestamos.component';

const routes: Routes = [
  {path:"",component:PrestamosComponent},
  {path:"Create", component:CreatePrestamoComponent},
  {path:"Detalle/:id", component:DetallePrestamoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrestamoRoutingModule { }
