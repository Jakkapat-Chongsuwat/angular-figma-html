// src/app/components/sidebar/sidebar.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  template: `
    <aside class="p-4 bg-yellow-200 h-full">
      <p class="mb-2">Jobs</p>
      <p>Status</p>
    </aside>
  `,
})
export class SidebarComponent {}
