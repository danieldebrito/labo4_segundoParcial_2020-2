import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Materia } from 'src/app/materia/materia';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  itemsCollection: AngularFirestoreCollection<Materia>;
  itemDoc: AngularFirestoreDocument<Materia>;
  items: Observable<Materia[]>;

  constructor(public db: AngularFirestore) {
    this.itemsCollection = this.db.collection('materias');
    this.items = this.itemsCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Materia;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  public getItems() {
    return this.items;
  }

  public deleteItem(item: Materia) {
    this.itemDoc = this.db.doc(`materias/${item.id}`);
    this.itemDoc.delete();
  }

  public addItem(item: Materia) {
    this.itemsCollection.add(item);
  }

  public updateItem(item: Materia) {
    this.itemDoc = this.db.doc(`materias/${item.id}`);
    this.itemDoc.update(item);
  }
}
