import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-clases',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './clases.html',
  styleUrls: ['./clases.css'], // ← CORREGIDO: plural y arreglo
})
export class Clases {}