import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './index.html',
  styleUrls: ['./index.css'],
})
export class Index{}

//Mensaje emergente de bienvenida para al cargar la pagina y advertir al profesor Nelson de angular 20 con standalone components

alert('Buenas tardes, profesor Nelson, El crud completo lo puede encontar en la pagina "inscripcion" "http://localhost:4200/clientes", NOTA: el desarrrolo se realizo en angular 20 con arquitectura standalone components');