import { Component, EventEmitter, OnInit, Output, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-greeting',
  imports: [CommonModule, MatButtonModule],
  templateUrl: './greeting.html',
  styleUrl: './greeting.scss',
})
export class Greeting implements OnInit {
  greetingCompleted = false;

  greeting = signal<boolean | undefined>(undefined);
  title = signal<boolean | undefined>(undefined);
  prefix = signal<boolean | undefined>(undefined);
  name = signal<boolean | undefined>(undefined);
  subtitle = signal<boolean | undefined>(undefined);
  initiation = signal<boolean | undefined>(undefined);

  imageURL = 'assets/images/photos/dp.jpg';
  imageSize = signal<number>(50);

  @Output() greetingComplete = new EventEmitter<boolean>();

  ngOnInit() {
    this.greet();
  }

  greet() {
    this.greetingCompleted = false;
    this.show(this.greeting, true, 500);
    this.show(this.greeting, false, 2500);
    this.show(this.greeting, undefined, 3500);
    this.show(this.title, true, 3600);
    this.show(this.prefix, true, 3600);
    this.show(this.name, true, 4100);
    this.show(this.subtitle, true, 5500);
    this.show(this.initiation, true, 7000);
  }

  show(signal: WritableSignal<boolean | undefined>, value: boolean | undefined, time: number) {
    setTimeout(() => signal.set(value), time);
  }

  proceed() {
    this.title.set(false);
    this.prefix.set(false);
    this.name.set(false);
    this.subtitle.set(false);
    this.initiation.set(false);
    setTimeout(() => {
      this.greetingCompleted = true;
      this.greetingComplete.emit(this.greetingCompleted);
    }, 1000);
  }
}
