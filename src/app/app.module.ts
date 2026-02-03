import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { PrestamoModule } from './componentes/prestamos/prestamo.module';
import { LibrosModule } from './componentes/libros/libros.module';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { HomeComponent } from './componentes/home/home.component';
import { ErrorComponent } from './componentes/error/error.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocioModule } from './componentes/socios/socio.module';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { DashboardComponent } from './componentes/login/dashboard/dashboard.component';
import { SignInComponent } from './componentes/login/sign-in/sign-in.component';
import { SignUpComponent } from './componentes/login/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './componentes/login/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './componentes/login/verify-email/verify-email.component';
import { AuthService } from './services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    LibrosModule,
    BrowserAnimationsModule,
    SocioModule,
    PrestamoModule,
    AngularFireAuthModule,
    AngularFirestoreModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
