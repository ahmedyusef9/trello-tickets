import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Ticket, ticketDialogType} from "../../core/model/ticket";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {TicketService} from "../../core/ticket.service";

@Component({
  selector: 'snx-ticket-dialog',
  templateUrl: './ticket-dialog.component.html',
  styles: [
  ]
})
export class TicketDialogComponent implements OnInit {
  operationType: string;
  ticketForm: FormGroup;
  members: string[] = ['Ahmed', 'Or', 'test1', 'test2'];


  constructor(private formBuilder: FormBuilder,
              private ticket$: TicketService,
              private dialogRef: MatDialogRef<TicketDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Ticket) {
  }

  ngOnInit(): void {

    this.operationType = this.data._id ? 'Update' : 'Add';

    this.ticketForm = this.formBuilder.group({
      title: [this.data.title ? this.data.title : '', Validators.required],
      description:[this.data.description ? this.data.description : '', Validators.required],
      members: [this.data.members ? this.data.members : ''],
      dueDate: [this.data.dueDate ? this.data.dueDate : '']
    })
  }

  submit() {
   const newTicket = Ticket.create({...this.data, ... this.ticketForm.value});
   this.ticketForm.reset();
   this.dialogRef.close(newTicket)
  }
}
