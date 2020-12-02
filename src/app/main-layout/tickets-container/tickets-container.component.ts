import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'snx-tickets-container',
  templateUrl: './tickets-container.component.html',
  styleUrls: [
      './tickets-container.component.scss'
  ]
})
export class TicketsContainerComponent implements OnInit {
  @Input('title') title: string;
  @Input('data') data: any;
  @Output('drop') drop = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
}
