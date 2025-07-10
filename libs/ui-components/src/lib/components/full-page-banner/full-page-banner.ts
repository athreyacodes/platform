import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'ui-full-page-banner',
  imports: [CommonModule, MatButtonModule, MatCheckboxModule],
  templateUrl: './full-page-banner.html',
  styleUrl: './full-page-banner.scss',
})
export class FullPageBanner {
  @Input() blur = false;
}
