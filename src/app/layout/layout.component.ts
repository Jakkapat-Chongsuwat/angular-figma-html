// src/app/layout/layout.component.ts
import { Component }      from '@angular/core';
import { RouterOutlet }   from '@angular/router';
import { CommonModule }   from '@angular/common';
import { HeroComponent } from '../components/hero/hero.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeroComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrls:   ['./layout.component.scss'],
})
export class LayoutComponent {}
