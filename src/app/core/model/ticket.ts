import { Parser } from '@angular/compiler/src/ml_parser/parser';
import {ticketStatus} from "../../consts";


export class Ticket {
    status:string;
    title: string;
    description: string;
    members: [];
    dueDate: Date;

    static create(ticket: Partial<Ticket> = {}) {
        const newTicket = Object.assign(new Ticket(), {
            title: null,
            description: null,
            members: [],
            dueDate: new Date(),
            status: ticketStatus.TODO,
            ...ticket
        })
        return newTicket;
    }
}

export interface ticketDialogType {
    operationType: string;
}
