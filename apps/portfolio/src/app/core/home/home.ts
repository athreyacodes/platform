import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullPageBanner } from '@platform/ui-components';
import { Greeting } from '../greeting/greeting';
import { About } from '../about/about';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FullPageBanner, Greeting, About],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  
  greetingComplete = false;

  onGreetingComplete() {
    this.greetingComplete = true;
  }
  
}
