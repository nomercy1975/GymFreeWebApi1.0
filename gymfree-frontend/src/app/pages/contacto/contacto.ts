import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.html'
})
export class Contacto {
  nombre = '';
  correo = '';
  mensaje = '';
  enviado = false;

  constructor(private http: HttpClient) {}

  enviar() {
    const datos = { nombre: this.nombre, correo: this.correo, mensaje: this.mensaje };
    this.http.post('http://localhost:4000/api/mensajes', datos).subscribe(() => {
      this.enviado = true;
      this.nombre = '';
      this.correo = '';
      this.mensaje = '';
    });
  }
}