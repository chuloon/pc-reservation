import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BlockStatus } from 'src/app/enums/block-status.enum';
import { Block } from 'src/app/classes/block';
import { Mode } from 'src/app/enums/mode.enum';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {
  @Input() blockData: Block;
  @Input() isCreateMode: boolean;
  @Output() statusChange: EventEmitter<BlockStatus> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  blockClick = () => {
    if(this.isCreateMode) {
      switch(this.blockData.status) {
        case BlockStatus.unassigned:
          this.blockData.status = BlockStatus.free;
          break;
        case BlockStatus.free:
          this.blockData.status = BlockStatus.terrain;
          break;
        case BlockStatus.terrain:
          this.blockData.status = BlockStatus.unassigned;
          break;
        default:
          this.blockData.status = BlockStatus.unassigned;
          break;
      }
    }
    else {
      switch(this.blockData.status) {
        case BlockStatus.free:
          this.blockData.status = BlockStatus.reserved;
          break;
        case BlockStatus.reserved:
          this.blockData.status = BlockStatus.free;
          break;
      }
    }
    
    this.statusChange.emit(this.blockData.status);
  }
}
