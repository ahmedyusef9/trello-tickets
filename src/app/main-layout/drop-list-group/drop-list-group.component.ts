

import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {CacheService} from "../../core/cache.service";
@Component({
  selector: 'snx-drop-list-group',
  templateUrl: './drop-list-component.html',
  styleUrls: [
      './drop-list-component.scss'
  ]
})
export class DropListGroupComponent implements OnInit {
  constructor(public cache$: CacheService) {
  }
  ngOnInit(): void {
  }
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}
