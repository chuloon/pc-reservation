import { Injectable } from '@angular/core';
import { Grid } from '../classes/grid';
import { AngularFirestore, DocumentReference, DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Block } from '../classes/block';
import { BlockStatus } from '../enums/block-status.enum';

@Injectable({
  providedIn: 'root'
})
export class GridService {

  constructor(private firestore: AngularFirestore) { }

  createGrid = (grid: Grid) => {
    const gridData = this.createGridData(grid);
    let promiseArray = [];
    gridData.forEach((data, index) => {
      data.forEach(d => {
        let item = {};
        item[d.columnNumber] = d;

        promiseArray.push(this.firestore.collection(grid.name).doc("row-" + index).set(item, { merge: true }));
      })
    });
    
    return Promise.all(promiseArray);
  }

  getGrid = (gridName): Observable<unknown[]> => {
    let data = this.firestore.collection(gridName).valueChanges();

    return data;
  }

  updateGrid = (gridName, rowNumber, columnNumber, blockData) => {
    let item = {};
    item[columnNumber] = blockData

    return this.firestore.collection(gridName).doc("row-" + rowNumber).update(item);
  }

  private createGridData = (grid: Grid) => {
    let retArray = [];

    for(let i = 0; i < grid.height; i++) {
      let row = [];
      for(let n = 0; n < grid.width; n++) {
        let pushObj: Block = { 
          status: BlockStatus.unassigned,
          columnNumber: n,
          rowNumber: i
        };

        row.push(pushObj);
      }

      retArray.push(row);
    }

    return retArray;
  }
}
