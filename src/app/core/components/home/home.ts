import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Greeting } from '../greeting/greeting';

@Component({
  selector: 'app-home',
  imports: [Greeting],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home {

  onGreetingComplete() {
    window.open('https://profile.athreyacodes.com');
  }
}
