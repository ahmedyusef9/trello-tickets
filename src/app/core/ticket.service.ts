import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Ticket} from "./model/ticket";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";


@Injectable({
    providedIn: 'root'
})
export class TicketService {

    constructor(private http: HttpClient) {}

    post(ticket: Ticket): Observable<Ticket[]> {
        return this.http.post<Ticket[]>(`${environment.apiUrlBase}/ticket`, ticket)
    }

    get(): Observable<Ticket[]> {
        return this.http.get<Ticket[]>(`${environment.apiUrlBase}/ticket`)
    }

    delete(id: string): Observable<Ticket[]> {
        return this.http.delete<Ticket[]>(`${environment.apiUrlBase}/ticket/${id}`)
    }
    patch(id: string, property = {}): Observable<Ticket[]> {
        return this.http.patch<Ticket[]>(`${environment.apiUrlBase}/ticket/${id}`, property)
    }
    put(id: string, ticket: Ticket): Observable<Ticket[]> {
        return this.http.patch<Ticket[]>(`${environment.apiUrlBase}/ticket/${id}`, ticket)
    }


}
