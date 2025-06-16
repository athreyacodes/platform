import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nx-welcome',
  imports: [CommonModule, RouterModule],
  template: `<a [routerLink]="'/portfolio'">Portfolio</a>`,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcome {}
