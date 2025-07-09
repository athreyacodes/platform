import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FullPageBanner } from '@platform/ui-components';

@Component({
  imports: [CommonModule, RouterModule, FullPageBanner],
  selector: 'app-portfolio-entry',
  template: `<ui-full-page-banner [header]="'Coming Soon...'" />`,
})
export class RemoteEntry {}
