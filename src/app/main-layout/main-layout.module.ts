import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DropListGroupComponent } from './drop-list-group/drop-list-group.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TicketsContainerComponent } from './tickets-container/tickets-container.component';
import { TicketHolderComponent } from './ticket-holder/ticket-holder.component';

const routes: Routes = [
  {path:'', component: DropListGroupComponent}
];

@NgModule({
  declarations: [DropListGroupComponent, TicketsContainerComponent, TicketHolderComponent],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    DragDropModule
  ],
  exports:[RouterModule,  ]
})
export class MainLayoutModule { }
