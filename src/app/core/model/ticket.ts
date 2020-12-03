import { Parser } from '@angular/compiler/src/ml_parser/parser';
import {TICKET_STATUS} from "../../consts";


export class Ticket {
    _id: string;
    status:string;
    title: string;
    description: string;
    members: [];
    dueDate: Date;

    static create(ticket: Partial<Ticket> = {}) {
        const newTicket = Object.assign(new Ticket(), {
            _id: null,
            title: null,
            description: null,
            members: [],
            dueDate: new Date(),
            status: TICKET_STATUS.TODO,
            ...ticket
        })
        return newTicket;
    }
}

export interface ticketDialogType {
    operationType: string;
}
