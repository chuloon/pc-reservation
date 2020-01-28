import { BlockStatus } from '../enums/block-status.enum';

export class Block {
    status: BlockStatus;
    columnNumber: number;
    rowNumber: number;
    blockLabel?: string;
}
