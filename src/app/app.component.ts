import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-public></app-public><router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'atiehkish';
}
