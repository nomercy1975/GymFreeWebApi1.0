import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mensajes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mensajes.html'
})
export class Mensajes implements OnInit {
  mensajes: any[] = [];
// borrar por id ----habilitacion del boton borrar
  constructor(private http: HttpClient) {}
  borrar(id: string) {
  this.http.delete(`http://localhost:4000/api/mensajes/${id}`).subscribe(() => {
    this.mensajes = this.mensajes.filter(m => m._id !== id);
  });
}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:4000/api/mensajes').subscribe(data => {
      this.mensajes = data;
    });
  }
}