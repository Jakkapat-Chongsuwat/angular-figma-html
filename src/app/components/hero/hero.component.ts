// src/app/components/hero/hero.component.ts
import { Component, Input }            from '@angular/core';
import { CommonModule }                 from '@angular/common';
import { BootstrapButtonComponent } from '../button/bootstrap-button.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule,     
    BootstrapButtonComponent,
  ],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  @Input() title    = 'The easiest way to go from design to code';
  @Input() subtitle = 'An all-in-one platform…';

  onGetStarted() {
    console.log('Get Started clicked');
  }
}
