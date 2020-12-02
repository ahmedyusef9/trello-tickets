import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'snx-ticket-holder',
  templateUrl: 'ticket-holder.component.html',
  styleUrls: [
      './ticket-holder.component.scss'
  ]
})
export class TicketHolderComponent implements OnInit {
  @Input('ticket') ticket;
  constructor() { }

  ngOnInit(): void {
  }

}
