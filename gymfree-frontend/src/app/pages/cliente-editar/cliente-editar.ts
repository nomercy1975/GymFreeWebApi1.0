import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-cliente-editar',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [ClienteService],
  templateUrl: './cliente-editar.html',
  styleUrls: ['./cliente-editar.css'],
})
export class ClienteEditar {
  cliente = {
    nombre: '',
    correo: '',
    telefono: '',
  };

  private api = inject(ClienteService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.api.getCliente(id).subscribe({
        next: (data) => (this.cliente = data),
        error: (err) => console.error('Error al cargar cliente', err),
      });
    }
  }

  actualizar() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.api.actualizarCliente(id, this.cliente).subscribe({
        next: () => this.router.navigate(['/clientes']),
        error: (err) => console.error('Error al actualizar cliente', err),
      });
    }
  }
}