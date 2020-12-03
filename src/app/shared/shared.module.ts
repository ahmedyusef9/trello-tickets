import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { TicketDialogComponent } from './ticket-dialog/ticket-dialog.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [ToolBarComponent, TicketDialogComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule.components,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    ToolBarComponent,
    MaterialModule.components,
    HttpClientModule
  ],
  entryComponents: [
    TicketDialogComponent
  ]
})
export class SharedModule { }
