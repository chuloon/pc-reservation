import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreationPromptComponent } from './creation-prompt/creation-prompt.component';
import { LayoutComponent } from './layout/layout.component';
import { BlockComponent } from './block/block.component';



@NgModule({
  declarations: [
    CreationPromptComponent,
    LayoutComponent,
    BlockComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class GridModule { }
