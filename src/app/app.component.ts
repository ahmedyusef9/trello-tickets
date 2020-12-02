import { Component } from '@angular/core';

@Component({
  selector: 'snx-root',
  template: `
      
    <h1>Sonarx trello</h1>
    <snx-tool-bar></snx-tool-bar>
    <div class="container-fluid">
    <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'trello-tickets';
}
