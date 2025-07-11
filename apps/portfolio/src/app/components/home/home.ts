import { Component, OnInit, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullPageBanner } from '@platform/ui-components';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FullPageBanner],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  greetingCompleted = false;

  blur = signal<boolean>(false);
  greeting = signal<boolean | undefined>(undefined);
  title = signal<boolean | undefined>(undefined);
  prefix = signal<boolean | undefined>(undefined);
  name = signal<boolean | undefined>(undefined);
  subtitle = signal<boolean | undefined>(undefined);

  ngOnInit() {
    if (document.hasFocus()) {
      this.greet();
    } else {
      window.addEventListener('focus', this.onFocus);
    }
  }

  onFocus = () => {
    if (!this.greetingCompleted) {
      this.greet();
      window.removeEventListener('focus', this.greet);
    }
  }

  greet() {
    setTimeout(() => this.greeting.set(true), 500);
    setTimeout(() => this.greeting.set(false), 2500);
    setTimeout(() => this.greeting.set(undefined), 3500);
    setTimeout(() => this.title.set(true), 3600);
    setTimeout(() => this.prefix.set(true), 3600);
    setTimeout(() => this.name.set(true), 4600);
    setTimeout(() => this.subtitle.set(true), 8000);
    setTimeout(() => this.blur.set(true), 10000);
  }
}
