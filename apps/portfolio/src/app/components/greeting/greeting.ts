import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-greeting',
  imports: [CommonModule],
  templateUrl: './greeting.html',
  styleUrl: './greeting.scss',
})
export class Greeting {
  greetingCompleted = false;

  blur = signal<boolean>(false);
  greeting = signal<boolean | undefined>(undefined);
  title = signal<boolean | undefined>(undefined);
  prefix = signal<boolean | undefined>(undefined);
  name = signal<boolean | undefined>(undefined);
  subtitle = signal<boolean | undefined>(undefined);

  ngOnInit() {
    this.greet();
  }

  greet() {
    setTimeout(() => this.greeting.set(true), 500);
    setTimeout(() => this.greeting.set(false), 2500);
    setTimeout(() => this.greeting.set(undefined), 3500);
    setTimeout(() => this.title.set(true), 3600);
    setTimeout(() => this.prefix.set(true), 3600);
    setTimeout(() => this.name.set(true), 4600);
    setTimeout(() => this.subtitle.set(true), 8000);
    // setTimeout(() => this.blur.set(true), 10000);
  }
}
