

import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {CacheService} from "../../core/cache.service";
import {Ticket} from "../../core/model/ticket";
import {TICKET_STATUS} from "../../consts";
@Component({
  selector: 'snx-drop-list-group',
  templateUrl: './drop-list-component.html',
  styleUrls: [
      './drop-list-component.scss'
  ]
})
export class DropListGroupComponent implements OnInit {
  eventArray: any;
  ticketStatus = Object.keys(TICKET_STATUS);
  constructor(public cache$: CacheService) {
  }
  ngOnInit(): void {

  }

  drop(event: CdkDragDrop<Ticket[]>) {

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log(event);
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }

  enter($event: CdkDragDrop<Ticket[]>) {
    console.log($event)
  }
}
