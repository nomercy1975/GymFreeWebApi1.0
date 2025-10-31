import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cliente-nuevo',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, RouterLink],
  providers: [ClienteService],
  templateUrl: './cliente-nuevo.html',
  styleUrls: ['./cliente-nuevo.css'],
})
export class ClienteNuevo {
  cliente = {
    nombre: '',
    correo: '',
    telefono: '',
  };

  private api = inject(ClienteService);
  private router = inject(Router);

  guardar() {
    this.api.crearCliente(this.cliente).subscribe({
      next: () => this.router.navigate(['/clientes']),
      error: (err) => console.error('Error al crear cliente', err),
    });
  }
}