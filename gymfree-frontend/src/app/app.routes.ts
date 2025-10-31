import { Routes } from '@angular/router';

import { Index } from './pages/index/index';
import { Clases } from './pages/clases/clases';
import { Planes } from './pages/planes/planes';
import { Contacto } from './pages/contacto/contacto';


import { ClientesList } from './pages/clientes-list/clientes-list';
import { ClienteNuevo } from './pages/cliente-nuevo/cliente-nuevo';
import { ClienteEditar } from './pages/cliente-editar/cliente-editar';

export const routes: Routes = [
  { path: '', component: Index },
  { path: 'clases', component: Clases },
  { path: 'planes', component: Planes },
  { path: 'contacto', component: Contacto },

  { path: 'clientes', component: ClientesList },
  { path: 'clientes/nuevo', component: ClienteNuevo },
  { path: 'clientes/editar/:id', component: ClienteEditar },
];