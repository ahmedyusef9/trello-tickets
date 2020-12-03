import {Component, Input, OnInit} from '@angular/core';
import {CacheService} from "../../core/cache.service";
import {Ticket} from "../../core/model/ticket";
import {DialogService} from "../../core/dialog.service";

@Component({
  selector: 'snx-ticket-holder',
  templateUrl: 'ticket-holder.component.html',
  styleUrls: [
      './ticket-holder.component.scss'
  ]
})
export class TicketHolderComponent implements OnInit {
  @Input('ticket') ticket: Ticket;
  constructor(public cache$: CacheService,
              public dialog$: DialogService) { }

  ngOnInit(): void {}

}
