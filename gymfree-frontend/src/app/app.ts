import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav class="teal">
      <div class="nav-wrapper container">
        <a routerLink="/" class="brand-logo">GymFree</a>
        <ul class="right hide-on-med-and-down">
          <li><a routerLink="/">Inicio</a></li>
          <li><a routerLink="/clases">Clases</a></li>
          <li><a routerLink="/planes">Planes</a></li>
          <li><a routerLink="/contacto">Contacto</a></li>
          <li><a routerLink="/clientes">Recepción</a></li>
        </ul>
      </div>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class App {}