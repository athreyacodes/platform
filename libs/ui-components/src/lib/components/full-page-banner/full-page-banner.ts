import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-full-page-banner',
  imports: [CommonModule],
  templateUrl: './full-page-banner.html',
  styleUrl: './full-page-banner.scss',
})
export class FullPageBanner {
  @Input() header = 'Welcome!';
}
