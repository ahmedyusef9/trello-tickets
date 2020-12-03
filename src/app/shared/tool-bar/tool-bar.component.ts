import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TicketDialogComponent} from "../ticket-dialog/ticket-dialog.component";
import {DialogService} from "../../core/dialog.service";
import {Ticket} from "../../core/model/ticket";


@Component({
  selector: 'snx-tool-bar',
  template: `
    <mat-toolbar>
      <button mat-raised-button color="primary" (click)="dialog$.open(ticket)">
        Add
        <mat-icon>add_circle_outline</mat-icon>
      </button>
    </mat-toolbar>
  `,
  styles: [
  ]
})
export class ToolBarComponent implements OnInit {
  public ticket = Ticket.create();
  constructor(public dialog: MatDialog,
              public dialog$: DialogService) { }

  ngOnInit(): void {
  }
}
