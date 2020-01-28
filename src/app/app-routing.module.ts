import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreationPromptComponent } from './grid/creation-prompt/creation-prompt.component';
import { LayoutComponent } from './grid/layout/layout.component';


const routes: Routes = [
  { path: '', component: CreationPromptComponent },
  { path: 'layout/:layoutName', component:LayoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
