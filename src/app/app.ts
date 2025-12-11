import { Component, signal } from '@angular/core';
import { Home } from './core/components/home/home';

@Component({
  selector: 'app-root',
  imports: [Home],
  template: `<app-home />`,
})
export class App {
  protected readonly title = signal('platform');
}
