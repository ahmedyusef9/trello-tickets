import { Injectable } from '@angular/core';
import {TicketService} from "./ticket.service";
import {BehaviorSubject, Observable} from "rxjs";
import {Ticket} from "./model/ticket";
import {filter} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  data = new BehaviorSubject({})
  constructor(private ticket$: TicketService) {
    this.loadData()
  }

  loadData() {
    this.ticket$.get().subscribe(
        data => this.data.next(data),
        error => console.log(error)
    )
  }
  getByStatus(status: string) {
    return this.data.pipe(filter(
        (ticket: Ticket) => ticket.status === status
    ))
  }
}
