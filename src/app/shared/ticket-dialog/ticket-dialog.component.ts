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
              @Inject(MAT_DIALOG_DATA) public data: ticketDialogType) {
  }

  ngOnInit(): void {
    this.operationType = this.data.operationType;
    this.ticketForm = this.formBuilder.group({
      title: ['', Validators.required],
      description:['', Validators.required],
      members: [''],
      dueDate: ['']
    })
  }

  submit() {
   const newTicket = Ticket.create({... this.ticketForm.value});
   this.ticket$.post(newTicket).subscribe(value => {
     this.dialogRef.close(value);
   });
  }
}
