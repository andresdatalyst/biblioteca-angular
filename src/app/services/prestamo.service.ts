import { SocioService } from './socio.service';
import { LibroService } from './libro.service';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {

  constructor(private angularFireModule:AngularFirestore) { }

  public createPrestamo(data:any) {
    return this.angularFireModule.collection('prestamos').add(data);
  }

  public getPrestamo(id: string){
    return this.angularFireModule.collection('prestamos').doc(id).snapshotChanges();
  }

  public getPrestamos() {
    return this.angularFireModule.collection('prestamos').snapshotChanges();
  }

  public updatePrestamo(documentId: string, data: any) {
    return this.angularFireModule.collection('prestamos').doc(documentId).set(data);
  }
  public deletePrestamo(DocumentId:string){
    return this.angularFireModule.collection("prestamos").doc(DocumentId).delete();
  }

  public obtenerPrestamoNoDevuelto(){
    return  this.angularFireModule.collection('prestamos', ref =>ref.where ('fechaFin',"==",null )).snapshotChanges();
  }





}

