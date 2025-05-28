// src/app/components/navbar/navbar.component.ts
import { Component }      from '@angular/core';
import { RouterModule }   from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="p-4 bg-bisque flex justify-between">
      <div class="font-bold text-lg">Logo</div>
      <div class="space-x-4">
        <a routerLink="/"     class="hover:underline">Home</a>
        <a routerLink="/contact" class="hover:underline">Contact</a>
      </div>
    </nav>
  `,
})
export class NavbarComponent {}
