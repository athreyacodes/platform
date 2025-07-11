import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-greeting',
  imports: [CommonModule],
  templateUrl: './greeting.html',
  styleUrl: './greeting.scss',
})
export class Greeting implements OnInit {
  greetingCompleted = false;

  showNewMessage = signal<boolean>(false);
  blur = signal<boolean>(false);
  greeting = signal<boolean | undefined>(undefined);
  title = signal<boolean | undefined>(undefined);
  prefix = signal<boolean | undefined>(undefined);
  name = signal<boolean | undefined>(undefined);
  subtitle = signal<boolean | undefined>(undefined);

  imageURL = 'assets/images/photos/dp.jpg';
  imageSize = signal<number>(50);

  ngOnInit() {
    this.show(this.showNewMessage, true, 1000);
    this.greet();
  }

  greet() {
    // this.show(this.greeting, true, 500);
    // this.show(this.greeting, false, 2500);
    // this.show(this.greeting, undefined, 3500);
    // this.show(this.title, true, 3600);
    // this.show(this.prefix, true, 3600);
    // this.show(this.name, true, 4600);
    // this.show(this.subtitle, true, 8000);
  }

  show(signal: WritableSignal<boolean | undefined>, value: boolean | undefined, time: number) {
    setTimeout(() => signal.set(value), time);
  }
}
