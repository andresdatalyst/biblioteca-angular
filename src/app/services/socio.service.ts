import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class SocioService {

  constructor(private firestore: AngularFirestore) { }

  public createSocio(data:any) {
    return this.firestore.collection('socios').add(data);
  }

  public getSocio(id: string){
    return this.firestore.collection('socios').doc(id).snapshotChanges();
  }

  public getSocios() {
    return this.firestore.collection('socios').snapshotChanges();
  }

  public updateSocio(documentId: string, data: any) {
    return this.firestore.collection('socios').doc(documentId).set(data);
  }
  public deleteSocio(DocumentId:string){
    return this.firestore.collection("socios").doc(DocumentId).delete();
  }

  //Devuelve los socios con cuentas Activas
  public getSociosCuentaActiva(){
    return this.firestore.collection('socios', ref =>ref.where ('cuentaActiva',"==",true)).snapshotChanges();
  }
}
