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

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:4000/api/mensajes').subscribe(data => {
      this.mensajes = data;
    });
  }
}