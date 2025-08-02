import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Home } from '../core/home/home';

@Component({
  imports: [
    CommonModule,
    RouterModule,
    Home,
  ],
  selector: 'app-portfolio-entry',
  template: `<app-home />`,
})
export class RemoteEntry {}
