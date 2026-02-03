


import { HomeComponent } from './componentes/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './componentes/error/error.component';
import { SignInComponent } from './componentes/login/sign-in/sign-in.component';
import { SignUpComponent } from './componentes/login/sign-up/sign-up.component';
import { DashboardComponent } from './componentes/login/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './componentes/login/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './componentes/login/verify-email/verify-email.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path: 'sign-in', component: SignInComponent },
  {path: 'register-user', component: SignUpComponent },
  {path: 'dashboard', component: DashboardComponent,canActivate: [AuthGuard] },
  {path: 'forgot-password', component: ForgotPasswordComponent },
  {path: 'verify-email-address', component: VerifyEmailComponent },
  {path:"libros",loadChildren:() =>import("./componentes/libros/libros.module").then(l=>l.LibrosModule),canActivate: [AuthGuard]},
  {path:"socios",loadChildren:() =>import("./componentes/socios/socio.module").then(s=>s.SocioModule),canActivate: [AuthGuard]},
  {path:"prestamos", loadChildren:() =>import("./componentes/prestamos/prestamo.module").then(p=>p.PrestamoModule),canActivate: [AuthGuard] },
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"**", component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
