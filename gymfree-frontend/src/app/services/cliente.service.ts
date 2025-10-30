import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ClienteService {
  private baseUrl = 'http://localhost:4000/api/clientes';

  constructor(private http: HttpClient) {}

  getClientes(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  crearCliente(cliente: any): Observable<any> {
    return this.http.post(this.baseUrl, cliente);
  }

  actualizarCliente(id: string, cliente: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, cliente);
  }

  eliminarCliente(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getCliente(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}