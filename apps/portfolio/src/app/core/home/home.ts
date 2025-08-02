import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullPageBanner } from '@platform/ui-components';
import { Greeting } from '../greeting/greeting';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FullPageBanner, Greeting],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  

  
}
