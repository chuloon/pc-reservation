import { Component, OnInit } from '@angular/core';
import { GridService } from 'src/app/services/grid.service';
import { Grid } from 'src/app/classes/grid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creation-prompt',
  templateUrl: './creation-prompt.component.html',
  styleUrls: ['./creation-prompt.component.scss']
})
export class CreationPromptComponent implements OnInit {
  layoutName: string;
  widthDimension: number;
  heightDimension: number;

  constructor(private gridService: GridService, private route: Router) { }

  ngOnInit() {
  }

  submitClick = () => {
    this.createGrid().then(result => {
      this.route.navigate(['/layout', this.layoutName]);
    });
  }

  private createGrid = async () => {
    const gridToCreate: Grid = { name: this.layoutName, width: this.widthDimension, height: this.heightDimension };
    await this.gridService.createGrid(gridToCreate);
  }

}
