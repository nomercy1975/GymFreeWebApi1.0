import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
declare const M: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav class="blue darken-3">
      <div class="nav-wrapper container">
        <a routerLink="/" class="brand-logo">GymFree</a>
        <a href="index.html" data-target="mobile-demo" class="sidenav-trigger">
          <i class="material-icons">menu</i>
        </a>
        <ul class="right hide-on-med-and-down"><!--  Menu de escritorio -->
          <li><a routerLink="/">Inicio</a></li>
          <li><a routerLink="/clases">Clases</a></li>
          <li><a routerLink="/planes">Planes</a></li>
          <li><a routerLink="/contacto">Contacto</a></li>
          <li><a routerLink="/clientes">Inscripcion</a></li>
           <li><a routerLink="/mensajes">mensajes de clientes</a></li>
        </ul>
      </div>
    </nav>

    <ul class="sidenav" id="mobile-demo"> <!--  Menu para celular responsive -->
      <li><a routerLink="/">Inicio</a></li>
      <li><a routerLink="/clases">Clases</a></li>
      <li><a routerLink="/planes">Planes</a></li>
      <li><a routerLink="/contacto">Contacto</a></li>
      <li><a routerLink="/clientes">Inscripcion</a></li>
       <li><a routerLink="/mensajes">mensajes de clientes</a></li>

    </ul>

    <router-outlet></router-outlet>
  `,
})
export class App implements AfterViewInit {
  ngAfterViewInit() {
    const elems = document.querySelectorAll('.sidenav'); // Inicializa el menu responsive ojo con tocarlo
    M.Sidenav.init(elems);
  }
}