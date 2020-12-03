import { Injectable } from '@angular/core';
import {TicketService} from "./ticket.service";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {Ticket} from "./model/ticket";
import {filter, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  data: BehaviorSubject<Ticket[]> = new BehaviorSubject<Ticket[]>([]);
  constructor(private ticket$: TicketService) {
    this.loadData()
  }
  
  loadData() {
    this.ticket$.get().subscribe(
        data => this.data.next(data),
        error => console.log(error)
    )
  }
  
  getById(_id: string): Observable<Ticket> {
    return this.data.pipe(
        map(tickets => tickets.find(ticket => ticket._id === _id))
    )
  }
  
  getByStatus(status: string) {
    return this.data.pipe(
        map(tickets => tickets.filter(value => value.status === status))
    )
  }

  deleteTicket(id: string) {
    this.ticket$.delete(id).subscribe(tickets => this.data.next(tickets))
  }

  createTicket(ticket: Ticket) {
    this.ticket$.post(ticket)
        .subscribe(tickets => this.data.next([...this.data.getValue(), ...tickets]))
  }

  modifyTicket(ticket: Ticket) {
    const properties = this.compareObject(ticket._id, ticket);
    return this.ticket$.patch(ticket._id, properties).subscribe(tickets => this.data.next(tickets))
  }

  private compareObject(_id: string, newTicket: Ticket) {
      let object = {};
      const prevTicket = this.getById(_id);
      Object.keys(prevTicket).forEach(property => {
        if (prevTicket[property] !== newTicket[property]) {
          object[property] = newTicket[property];
        }
      })
      return object;
  }
}
