import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nx-welcome',
  imports: [CommonModule, RouterModule],
  template: `<a [routerLink]="'/portfolio'" style="margin: 50px">Portfolio</a>`,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcome {}
