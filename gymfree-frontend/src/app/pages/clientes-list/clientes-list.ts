import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-clientes-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  providers: [ClienteService],
  templateUrl: './clientes-list.html',
  styleUrls: ['./clientes-list.css'],
})
export class ClientesList {
  clientes: any[] = [];
  private api = inject(ClienteService);

  ngOnInit() {
    this.api.getClientes().subscribe({
      next: (data) => (this.clientes = data),
      error: (err) => console.error('Error al cargar clientes', err),
    });
  }

  eliminar(id: string) {
    if (confirm('¿Estás seguro de eliminar este cliente?')) {
      this.api.eliminarCliente(id).subscribe({
        next: () => {
          this.clientes = this.clientes.filter(c => c._id !== id);
        },
        error: (err) => console.error('Error al eliminar cliente', err),
      });
    }
  }
}

