import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  imports: [RouterModule],
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
})
export class App implements OnInit {
  ngOnInit(): void {
    this.setRealVh();
  }

  @HostListener('window:resize')
  onResize() {
    this.setRealVh();
  }

  setRealVh() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
}
