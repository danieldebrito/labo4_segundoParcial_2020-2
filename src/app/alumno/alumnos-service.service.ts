import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Alumno } from 'src/app/alumno/class/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnosServiceService {

  ItemsCollection: AngularFirestoreCollection<Alumno>;
  ItemDoc: AngularFirestoreDocument<Alumno>;
  Items: Observable<Alumno[]>;

  constructor(public db: AngularFirestore) {
    this.ItemsCollection = this.db.collection('alumnos');
    this.Items = this.ItemsCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Alumno;
        data.uid = a.payload.doc.id;
        return data;
      });
    }));
  }

  public getItems() {
    return this.Items;
  }

  public deleteItem(Item: Alumno) {
    this.ItemDoc = this.db.doc(`alumnos/${Item.uid}`);
    this.ItemDoc.delete();
  }

  public addItem(Item: Alumno) {
    this.ItemsCollection.add(Item);
  }

  public updateItem(Item: Alumno) {
    this.ItemDoc = this.db.doc(`alumnos/${Item.uid}`);
    this.ItemDoc.update(Item);
  }
}
