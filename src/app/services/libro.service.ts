import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LibroService {
  constructor(
    private angularFireModule: AngularFirestore
  ) {}

  public createLibro(data:any) {
    return this.angularFireModule.collection('libros').add(data);
  }

  public getLibro(id: string){
    return this.angularFireModule.collection('libros').doc(id).snapshotChanges();
  }

  public getLibros() {
    return this.angularFireModule.collection('libros').snapshotChanges();
  }

  public updateLibro(documentId: string, data: any) {
    return this.angularFireModule.collection('libros').doc(documentId).set(data);
  }
  public deleteLibro(DocumentId:string){
    return this.angularFireModule.collection("libros").doc(DocumentId).delete();
  }

  //Este método me devuelve un array de libros no prestados
  public getLibrosNoPrestados(){
    return this.angularFireModule.collection('libros', ref =>ref.where ('prestado',"==",false)).snapshotChanges();
  }
  //Este método me devuelve un array de libros por nombre
  public getLibrosPorNombre(titulo:string){
    return this.angularFireModule.collection('libros', ref =>ref.where ('titulo'.toLocaleLowerCase(),"==",titulo.toLocaleLowerCase())).snapshotChanges();
  }

  public getLibrosActivos(){
    return this.angularFireModule.collection('libros', ref =>ref.where ('libroActivo',"==",true)).snapshotChanges();
  }


}
