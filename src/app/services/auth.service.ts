import {Injectable, NgZone} from '@angular/core';
import {Router} from "@angular/router";
import {AngularFirestore, AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";

import firebase from 'firebase/compat/app';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any; // Save logged in user data

  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(<string>localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', 'null');
        console.log(localStorage.getItem('user'));
        JSON.parse(<string>localStorage.getItem('user'));
      }
    })
  }

  // Sign in with email/password
  SignIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        //enviamos a la base de datos el user
        this.SetUserData(result.user);
        //Lo seteamos en localStorage, guardandolo en sesión
        localStorage.setItem('user', JSON.stringify(result.user));
        this.ngZone.run(() => {
          //Enviamos el usuario a su dashboard cuya ruta tiene un can activated que llama al metodo
          //Logginin, el cual necesita que el usuario este en localstorage, por eso lo seteamos antes de enviarlo
          this.router.navigate(['dashboard']);
        });

      }).catch((error) => {
        window.alert(error.message)
      })
  }

  // Sign up with email/password
  SignUp(email: any, password: any) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign
        up and returns promise */
        this.SendVerificationMail();
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.afAuth.currentUser
      .then( u => u?.sendEmailVerification())
      .then(() => {
        this.router.navigate(['verify-email-address']);
      })
  }

  // Reset Forggot password
  ForgotPassword(passwordResetEmail: string) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      }).catch((error) => {
        window.alert(error)
      })
  }

  // Devuelve true cuando el usuario está logeado y el email verificado
  get isLoggedIn(): boolean {
    console.log(localStorage.getItem('user'));
    const user = JSON.parse(<string>localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false);
  }

  // Sign in with Google
  GoogleAuth() {

    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());

  }

  // Auth logic to run auth providers
  AuthLogin(provider: firebase.auth.AuthProvider) {
    return this.afAuth.signInWithPopup(provider)
      .then((result) => {
        this.SetUserData(result.user);
        localStorage.setItem('user', JSON.stringify(result.user));
        this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        })


      }).catch((error) => {
        window.alert(error)
      })
  }

  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
      rol:"customer"
    }
    return userRef.set(userData, {
      merge: true
    })
  }

  // Sign out
  SignOut() {
    return this.afAuth.signOut().then(() => {
      console.log('Hola soy sign-out!');
      localStorage.removeItem('user');
      this.router.navigate(['/sign-in']);
    })
  }

}
