import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Ticket} from "../../core/model/ticket";
import {Observable} from "rxjs";

@Component({
  selector: 'snx-tickets-container',
  templateUrl: './tickets-container.component.html',
  styleUrls: [
      './tickets-container.component.scss'
  ]
})
export class TicketsContainerComponent implements OnInit {
  @Input('title') @Output('title') title: string;
  @Input('data') data: Observable<Ticket[]>;
  @Output('drop') drop = new EventEmitter();
  private _tickets: Ticket[];
  constructor() { }

  ngOnInit(): void {
    this.data.subscribe(tickets => this._tickets = tickets)
  }

  get tickets(): Ticket[] {
    return this._tickets;
  }

  set tickets(value: Ticket[]) {
    this._tickets = value;
  }
}
