
//Modules
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { CommonModule } from '@angular/common';

//Pipes
import {
  TranslatePipe, ReversePipe, IfNullPipe
} from '@app/pipes';

import {  RouterlinkCustom } from '@app/directives';

import {AlertModule} from 'ngx-bootstrap';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    TranslatePipe,
    ReversePipe,
    IfNullPipe,
    RouterlinkCustom
  //components
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TextMaskModule,
    //BrowserAnimationsModule,
    AlertModule.forRoot()
  ],
  providers: [
    ],
  exports:[
    //Pipes
    TranslatePipe,
    ReversePipe,
    IfNullPipe,
    RouterlinkCustom,
    //Modules
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TextMaskModule,
    HttpClientModule
  ]
})
export class SharedModule {
    static forRoot() {
        return {
            ngModule: SharedModule,
            providers: [],
        };
     }
 }
