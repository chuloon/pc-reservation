import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GridService } from 'src/app/services/grid.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  layoutName: string;
  gridData: any[];
  isCreateMode: boolean = true;

  constructor(private route: ActivatedRoute, private gridService: GridService) { }

  ngOnInit() {
    this.getRouteParams();
  }

  getRouteParams = () => {
    this.route.params.subscribe(params => {
      this.layoutName = params['layoutName'];
      this.loadGrid();
    });
  }

  loadGrid = () => {
    this.gridService.getGrid(this.layoutName).subscribe(gridData => {
      this.gridData = gridData.docs.map(doc => doc.data());
      console.log(this.gridData);
    });
  }

  getColumnArray = () => {
    let retArray = [];

    for (const prop in this.gridData[0]) {
      retArray.push(1);
    }

    return retArray;
  }

  getBlockData = (rowNumber, columnNumber) => {
    return this.gridData[rowNumber][columnNumber];
  }

  blockStatusChange = (newStatus, rowNumber, columnNumber) => {
    let blockData = this.getBlockData(rowNumber, columnNumber);
    blockData.status = newStatus;
    console.log(blockData);
  }
}
