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
  blur = signal<boolean>(false);
  greeting = signal<boolean | undefined>(undefined);
  title = signal<boolean | undefined>(undefined);
  prefix = signal<boolean | undefined>(undefined);
  name = signal<boolean | undefined>(undefined);
  subtitle = signal<boolean | undefined>(undefined);

  ngOnInit() {
    this.greet();
    this.introduce();
    this.blurBackground();
  }

  greet() {
    setTimeout(() => this.greeting.set(true), 500);
    setTimeout(() => this.greeting.set(false), 3000);
    setTimeout(() => this.greeting.set(undefined), 4000);
  }

  introduce() {
    setTimeout(() => this.title.set(true), 4100);
    setTimeout(() => this.prefix.set(true), 4100);
    setTimeout(() => this.name.set(true), 5000);
    setTimeout(() => this.subtitle.set(true), 8000);
  }

  blurBackground() {
    setTimeout(() => this.blur.set(true), 5000);
  }
}
