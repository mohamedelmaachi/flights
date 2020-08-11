import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentComponent } from './component.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "@app/modules";


const routes: Routes = [
  {path:'', component:ComponentComponent},
];

@NgModule({
  declarations: [
    ComponentComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ComponentModule { }
