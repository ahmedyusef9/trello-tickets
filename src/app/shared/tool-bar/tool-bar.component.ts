import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TicketDialogComponent} from "../ticket-dialog/ticket-dialog.component";


@Component({
  selector: 'snx-tool-bar',
  template: `
    <mat-toolbar>
      <button mat-raised-button color="primary" (click)="openDialog('add')">
        Add
        <mat-icon>add_circle_outline</mat-icon>
      </button>
    </mat-toolbar>
  `,
  styles: [
  ]
})
export class ToolBarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(operationType: string) {
    const data = {operationType: operationType}
    const dialogRef = this.dialog.open(TicketDialogComponent,
        {data: data});
  }
}
