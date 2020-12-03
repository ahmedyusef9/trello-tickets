import {Injectable} from "@angular/core";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {TicketDialogComponent} from "../shared/ticket-dialog/ticket-dialog.component";
import {Ticket} from "./model/ticket";
import {CacheService} from "./cache.service";


@Injectable({
    providedIn: 'root'
})
export class DialogService {
    dialogRef: MatDialogRef<TicketDialogComponent>;
    constructor(private dialog: MatDialog,
                private cache$: CacheService) {}

    public open(ticket: Ticket) {
        this.dialogRef = this.dialog.open(TicketDialogComponent,{
            width:'400px',
            data: { ...ticket },
        })
        this.dialogRef.afterClosed().subscribe((ticket: Ticket) => {
            if (ticket._id) {
                // put

            } else {
                // add
                this.cache$.createTicket(ticket);
            }
        })
    }

}
